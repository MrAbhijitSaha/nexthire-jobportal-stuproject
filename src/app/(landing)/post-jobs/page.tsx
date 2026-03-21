import PostHero from "@/components/Landing/PostJob/PostHero";

const page = () => {
  return (
    <section className="bg-[url(/desktop-bg.svg)] bg-cover">
      <section className="mx-auto grid h-dvh max-w-7xl place-items-center px-6">
        <PostHero />
      </section>
    </section>
  );
};

export default page;
