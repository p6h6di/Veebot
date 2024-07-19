"use server";

import { prisma } from "@/prisma/prisma";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// ------ Retrieves the subscription plan for the current user.
export const onGetSubscriptionPlan = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const plan = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    });

    if (plan) {
      return plan.subscription?.plan;
    }
  } catch (error) {
    console.log("BILLING_SETTINGS:", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

// ------ Retrieves all account domains associated with the current user.
export const onGetAllAccountDomains = async () => {
  const user = await currentUser();
  if (!user) return;
  try {
    const domains = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        id: true,
        domains: {
          select: {
            name: true,
            icon: true,
            id: true,
            customer: {
              select: {
                chatRoom: {
                  select: {
                    id: true,
                    live: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return { ...domains };
  } catch (error) {
    console.log(error);
  }
};

/**
 * Integrates a new domain for the current user with the provided domain name and icon.
 * Checks user authentication, subscription plan, and domain limits before adding the domain.
 */
export const onIntegrateDomain = async (domain: string, icon: string) => {
  const user = await currentUser();
  if (!user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const subscription = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        _count: {
          select: {
            domains: true,
          },
        },
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    });

    const domainExists = await prisma.user.findFirst({
      where: {
        clerkId: user.id,
        domains: {
          some: {
            name: domain,
          },
        },
      },
    });

    if (!domainExists) {
      if (
        (subscription?.subscription?.plan === "STANDARD" &&
          subscription._count.domains < 1) ||
        (subscription?.subscription?.plan === "PRO" &&
          subscription._count.domains < 5) ||
        (subscription?.subscription?.plan === "ULTIMATE" &&
          subscription._count.domains < 10)
      ) {
        const newDomain = await prisma.user.update({
          where: {
            clerkId: user.id,
          },
          data: {
            domains: {
              create: {
                name: domain,
                icon,
                chatBot: {
                  create: {
                    welcomeMessage: "Hey there, have a questions? Text us here",
                  },
                },
              },
            },
          },
        });

        if (newDomain) {
          return new NextResponse(
            JSON.stringify({ message: "Domain successfully added" }),
            { status: 200 }
          );
        }
      }

      return new NextResponse(
        JSON.stringify({
          message:
            "You've reached the maximum number of domains, upgrade your plan",
        }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Domain already exists" }),
      { status: 400 }
    );
  } catch (error) {
    console.log("ON_INTEGRATE_DOMAIN:", error);
    return { status: 500, error: "Internal Server Error" };
  }
};
