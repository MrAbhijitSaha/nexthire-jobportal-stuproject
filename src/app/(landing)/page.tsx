import CandidateAdvantages from "@/components/Landing/FindJob/CandidateAdvantages";
import Hero from "@/components/Landing/FindJob/Hero";
import FooterTop from "@/components/Landing/FooterTop";
import OurGrowingNetwork from "@/components/Landing/OurGrowingNetwork";
import { candidateAdvantageCardDetails } from "@/lib/information";

const page = () => {
  return (
    <section className="bg-[url(/desktop-bg.svg)] bg-cover">
      <section className="mx-auto max-w-7xl px-6">
        <section className="grid h-dvh place-items-center">
          <Hero />
        </section>

        {/* Why Choose Candidate's Next Hire / Advantages   */}
        <section className="space-y-6 pb-24 text-center">
          <h3 className="text-2xl font-bold md:text-4xl">
            Find your next job from start to finish
          </h3>

          <p className="mx-auto text-base text-black/75 md:block md:w-3xl dark:text-white/75">
            Discover opportunities that match your skills, apply with ease, and
            track your progress—all in one place. Everything you need to land
            your next role, simplified.
          </p>

          <section className="grid grid-cols-1 gap-8 rounded-xl bg-white p-8 shadow-lg md:grid-cols-2 dark:bg-white/16">
            {candidateAdvantageCardDetails.map((detail) => (
              <CandidateAdvantages
                key={detail.id}
                info={detail}
              />
            ))}
          </section>
        </section>

        {/* Our achivment / Growing  Network section  */}
        <section className="space-y-6 pb-24 text-center">
          <h3 className="text-2xl font-bold md:text-4xl">
            Our Growing Network
          </h3>
          <p className="mx-auto text-base text-black/75 md:block md:w-3xl dark:text-white/75">
            Join thousands of jobseekers and companies who trust our platform to
            connect talent with the right opportunities every day.
          </p>

          <OurGrowingNetwork />
        </section>

        <section className="pb-24">
          <FooterTop />
        </section>
      </section>
    </section>
  );
};

export default page;
