import LandingFooter from "@/components/Footer/LandingFooter";
import Header from "@/components/Header/Header";
import { LayoutChildrenProps } from "@/lib/types";

const LandingLayout = ({ children }: LayoutChildrenProps) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <LandingFooter />
    </>
  );
};

export default LandingLayout;
