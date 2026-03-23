import SignupForm from "@/components/Forms/SignupForm";
import FormSideBrandContentSection from "@/components/Section/FormSideBrandContentSection";
import { Separator } from "@/components/shadcnui/separator";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Signup Page - NextHire",
  description: "Signup page of NextHire application",
};

const page = () => {
  return (
    <section className="relative flex min-h-screen w-full overflow-hidden">
      {/* Left branding panel hidden on mobile */}
      <FormSideBrandContentSection />

      {/* Right form panel */}
      <div className="flex flex-1 flex-col">
        {/* Centered form */}
        <div className="flex flex-1 items-center justify-center px-6 pb-16">
          <div className="w-full max-w-95 space-y-5">
            {/* Heading */}
            <div className="space-y-1">
              <h2 className="text-[1.75rem] font-semibold tracking-tight">
                Ready to take the next step?
              </h2>
              <p className="text-foreground/50 text-sm">Create an account.</p>
            </div>

            {/* signup form */}
            <SignupForm />

            {/* Divider */}
            <div className="my-4 grid grid-cols-5 place-items-center">
              <Separator className="col-span-2" />
              <span className="px-3 text-lg">or</span>
              <Separator className="col-span-2" />
            </div>

            {/* already have account? Sign in link */}
            <p className="text-center text-sm">
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
