import ThemeToggleButton from "../Buttons/ThemeToggleButton";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const LandingNav = () => {
  return (
    <>
      {/* Mobile Nav Items  */}
      <nav
        className="flex items-center gap-3 md:hidden"
        aria-label="Nav-Items">
        <ThemeToggleButton />
        <MobileNav />
      </nav>

      {/* Desktop Nav Items  */}
      <nav
        className="hidden md:flex md:items-center md:gap-4"
        aria-label="Nav-Items">
        <DesktopNav />
      </nav>
    </>
  );
};

export default LandingNav;
