import {
  BookmarkIcon,
  ClipboardListIcon,
  InboxIcon,
  PlusCircleIcon,
  SearchIcon,
  SendHorizontalIcon,
  TrendingUpIcon,
  UserCheckIcon,
} from "lucide-react";
import { AdvantageCardType } from "./types";

export const candidateAdvantageCardDetails: AdvantageCardType[] = [
  {
    id: 1,
    icon: SearchIcon,
    heading: " Search Jobs Easily",
    description:
      "Browse thousands of job opportunities tailored to your skills, experience, and preferences. Use smart filters to quickly find roles that match what you’re looking for.",
  },
  {
    id: 2,
    icon: SendHorizontalIcon,
    heading: "Apply Easily",
    description:
      "Apply to jobs in just a few clicks with a simple and streamlined process. Upload your resume, fill in your details, and submit applications without hassle.",
  },
  {
    id: 3,
    icon: BookmarkIcon,
    heading: "Save Jobs for Later",
    description:
      "Bookmark jobs that interest you and come back to them anytime. Keep track of opportunities so you never miss the right one.",
  },
  {
    id: 4,
    icon: ClipboardListIcon,
    heading: "Review Applied Jobs",
    description:
      "Track all your applications in one place. Stay updated on statuses, revisit job details, and manage your progress throughout your job search.",
  },
];

export const recruiterAdvantageCardDetails: AdvantageCardType[] = [
  {
    id: 1,
    icon: PlusCircleIcon,
    heading: "Post Jobs Easily",
    description:
      "Create and publish job listings in minutes. Reach thousands of potential candidates and attract the right talent with customizable job descriptions and smart targeting.",
  },
  {
    id: 2,
    icon: InboxIcon,
    heading: "Manage Applications",
    description:
      "Track and organize all applications in one place. Filter candidates, review resumes, and move applicants through your hiring pipeline effortlessly.",
  },
  {
    id: 3,
    icon: UserCheckIcon,
    heading: "Shortlist & Connect",
    description:
      "Quickly shortlist top candidates and connect with them directly. Schedule interviews, send messages, and collaborate with your team without leaving the platform.",
  },
  {
    id: 4,
    icon: TrendingUpIcon,
    heading: "Track Hiring Progress",
    description:
      "Monitor your hiring journey from start to finish. Stay updated on candidate status, interview stages, and make data-driven hiring decisions with ease.",
  },
];
