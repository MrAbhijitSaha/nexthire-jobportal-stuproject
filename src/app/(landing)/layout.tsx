import Header from "@/components/Header/Header";
import { CustomLayoutProps } from "@/lib/type";

const LandingLayout = ({ children }: CustomLayoutProps) => {
  return (
    <>
      <Header />

      {children}
    </>
  );
};

export default LandingLayout;
