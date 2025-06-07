"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "@/lib/auth-client";

export default function Page() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center space-y-8">
      <div className="flex items-center justify-center space-x-2">
        <h1 className="font-bold text-xl">Welcome to </h1>
        <img src={"./demo_wordmark.svg"} className="w-30  h-auto aspect-auto" />
      </div>
      <p>Sign in below (we'll increase your message limits if you do 😉)</p>
      <Button
        onClick={() =>
          signIn.social({
            provider: "google",
          })
        }
        size={"lg"}
        className="p-4 px-22 h-auto w-auto space-x-3 text-xl"
      >
        <Image src="./google.svg" width={18} height={18} alt="Google" />
        Continue with Google
      </Button>
      <p>
        By continuing, you agree to our{" "}
        <Link href="https://t3.chat/terms-of-service">Terms of Service</Link>{" "}
        and <Link href="https://t3.chat/privacy-policy">Privacy Policy</Link>
      </p>
    </div>
  );
}
