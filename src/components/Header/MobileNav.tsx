"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../shadcnui/sheet";

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);
  const path = usePathname();

  return (
    <Sheet
      open={isOpen}
      onOpenChange={setOpen}>
      <SheetTrigger aria-label="Mobile-Nav-Open-Button">
        <Menu size={24} />
      </SheetTrigger>

      <SheetContent className="bg-white backdrop-blur-md dark:bg-transparent">
        <SheetHeader className="border-b-2">
          <SheetTitle
            aria-label="Mobile-Nav-Logo"
            onClick={() => setOpen(false)}>
            Next Hire
          </SheetTitle>
          <SheetDescription />
        </SheetHeader>

        <div className="grid grid-cols-1 gap-4 px-4 font-semibold">
          {/* Candidate landing page link  */}
          <Link
            href="/"
            className={`hover:text-blue-600 dark:hover:text-blue-400 ${
              path === "/" ? "text-blue-600 dark:text-blue-400" : ""
            }`}
            onClick={() => setOpen(false)}>
            Find Jobs
          </Link>

          {/* post job landing page link  */}
          <Link
            href={"/post-jobs"}
            className={`hover:text-blue-600 dark:hover:text-blue-400 ${
              path === "/post-jobs" ? "text-blue-600 dark:text-blue-400" : ""
            }`}
            onClick={() => setOpen(false)}>
            Recruiter/Post Jobs
          </Link>

          {/* sign in link  */}
          <Link
            href={"/auth/signin"}
            className="hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setOpen(false)}>
            Sign in
          </Link>

          {/* sign up button  */}
          <Link
            href="/auth/signup"
            className="hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setOpen(false)}>
            Sign up
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
