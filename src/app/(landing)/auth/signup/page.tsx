import SignupForm from "@/components/Forms/SignupForm";
import { Separator } from "@/components/shadcnui/separator";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Signup Page - NextHire",
  description: "Signup page of NextHire application",
};

const page = () => {
  return (
    <section className="relative flex min-h-screen w-full overflow-hidden">
      {/* Left branding panel hidden on mobile */}
      <div className="relative hidden w-[30%] shrink-0 flex-col items-center justify-center overflow-hidden border-r border-white/6 md:flex">
        {/* radial gradient blobs pooling at the bottom */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 80% 55% at 50% 95%, rgba(34,197,94,0.20) 0%, transparent 60%)",
              "radial-gradient(ellipse 65% 45% at 15% 100%, rgba(234,179,8,0.22) 0%, transparent 55%)",
              "radial-gradient(ellipse 55% 40% at 85% 100%, rgba(249,115,22,0.16) 0%, transparent 50%)",
            ].join(","),
          }}
        />

        {/* Dot grid texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Brand content */}
        <div className="relative z-10 flex flex-col items-center gap-5 px-10 text-center">
          <Image
            src="/app-logo.png"
            alt="NextHire logo"
            width={120}
            height={120}
            className="object-contain"
          />

          <h1 className="text-xl font-semibold tracking-tight text-white">
            Your dream job is waiting
          </h1>
          <p className="text-sm leading-relaxed text-white/40">
            Build your profile and get discovered by top companies today.
          </p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex flex-1 flex-col">
        {/* Centered form */}
        <div className="flex flex-1 items-center justify-center px-6 pb-16">
          <div className="w-full max-w-95 space-y-5">
            {/* Heading */}
            <div className="space-y-1">
              <h2 className="text-[1.75rem] font-semibold tracking-tight text-white">
                Welcome Back
              </h2>
              <p className="text-sm text-white/40">Sign in to your account</p>
            </div>

            {/* signup form */}
            <SignupForm />

            {/* Divider */}
            <div className="my-4 grid grid-cols-5 place-items-center">
              <Separator className="col-span-2" />
              <span className="px-3 text-lg">or</span>
              <Separator className="col-span-2" />
            </div>

            {/* Sign in link */}
            <p className="text-center text-sm text-white/40">
              Already have an account?{" "}
              <Link
                href="/auth/signin"
                className="text-blue-400 transition-colors hover:text-blue-300">
                Login now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
