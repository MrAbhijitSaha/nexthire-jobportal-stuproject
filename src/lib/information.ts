import {
  BookmarkIcon,
  ClipboardListIcon,
  SearchIcon,
  SendHorizontalIcon,
} from "lucide-react";
import { AdvantageCardType } from "./type";

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
