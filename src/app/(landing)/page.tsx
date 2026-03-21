import Hero from "@/components/Landing/FindJob/Hero";

const page = () => {
  return (
    <section className="bg-[url(/desktop-bg.svg)] bg-cover">
      <section className="mx-auto grid h-dvh max-w-7xl place-items-center px-6">
        <Hero />
      </section>
    </section>
  );
};

export default page;
