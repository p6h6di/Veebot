"use server";

import { prisma } from "@/prisma/prisma";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { onGetAllAccountDomains } from "@/actions/settings";

/**
 * Handles the completion of user registration by creating a new user record in the database.
 */
export const onCompleteUserRegistration = async (
  fullname: string,
  clerkId: string,
  type: string
) => {
  try {
    const registered = await prisma.user.create({
      data: {
        fullname,
        clerkId,
        type,
        subscription: {
          create: {},
        },
      },
      select: {
        fullname: true,
        id: true,
        type: true,
      },
    });

    if (registered) {
      return { status: 200, user: registered };
    }
  } catch (error) {
    return { status: 500, error: "Internal Server Error" };
  }
};

/**
 * If the user is not authenticated, redirects to the sign-in page.
 * If the user is authenticated, fetches user details and account domains.
 */
export const onLoginUser = async () => {
  const user = await currentUser();
  if (!user) redirectToSignIn();
  else {
    try {
      const authenticated = await prisma.user.findUnique({
        where: {
          clerkId: user.id,
        },
        select: {
          id: true,
          fullname: true,
          type: true,
        },
      });

      if (authenticated) {
        const domains = await onGetAllAccountDomains();
        return { status: 200, user: authenticated, domain: domains?.domains };
      }
    } catch (error) {
      console.log("LOGGED_USER:", error);
      return { status: 500, error: "Internal Server Error" };
    }
  }
};
