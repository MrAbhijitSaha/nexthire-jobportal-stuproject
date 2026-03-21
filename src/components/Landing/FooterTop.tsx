import Link from "next/link";

const FooterTop = () => {
  return (
    <div className="relative space-y-4 overflow-hidden rounded-3xl bg-linear-to-b from-white to-white px-6 py-44 text-center md:py-38 dark:from-white/4 dark:to-black/4">
      {/* Gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_70%_at_bottom,rgba(0,0,0,0.35),transparent_97%)] dark:bg-[radial-gradient(ellipse_120%_70%_at_bottom,rgba(255,255,255,0.35),transparent_97%)]">
        <section className="grid place-items-center gap-4 px-6 py-20">
          <h2 className="text-2xl font-bold text-black md:text-4xl dark:text-white">
            Ready to find the right opportunity?
          </h2>

          <p className="hidden font-medium text-balance text-black/65 md:block dark:text-white/75">
            Ready to find the right opportunity? Discover jobs that match your
            skills and interests, connect with trusted employers, and take the
            next step toward building a successful career with confidence.
          </p>

          <p className="block text-base font-medium text-black/65 md:hidden dark:text-white/75">
            Ready to find the right opportunity? Discover jobs that match your
            skills and connect with the right
          </p>

          <Link href="/auth/signup">
            <button
              type="button"
              className="mx-auto rounded-xl bg-black px-12 py-2.5 text-[16px] text-white hover:bg-black/85 hover:text-white dark:bg-blue-600 dark:hover:bg-blue-700">
              Let&apos;s Start
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default FooterTop;
