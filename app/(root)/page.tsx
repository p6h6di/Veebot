import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex items-center">
        <Link
          href="/auth/sign-in"
          className={buttonVariants({ variant: "link", size: "lg" })}
        >
          Login
        </Link>
        <Link href="/auth/sign-up" className={buttonVariants()}>
          Get Started
        </Link>
      </div>
    </div>
  );
}
