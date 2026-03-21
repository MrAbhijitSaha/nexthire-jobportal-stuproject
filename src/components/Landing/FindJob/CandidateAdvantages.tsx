import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { AdvantageCardType } from "@/lib/type";

type CandidateAdvantagesProps = {
  info: AdvantageCardType;
};

const CandidateAdvantages = ({ info }: CandidateAdvantagesProps) => {
  return (
    <Card className="bg-white/4 shadow-md">
      <CardHeader className="flex items-center gap-3">
        <div className="rounded-md bg-blue-600 p-2 text-white dark:bg-blue-500">
          <info.icon />
        </div>
        <CardTitle className="text-start">{info.heading}</CardTitle>
      </CardHeader>
      <CardContent className="text-start text-base">
        <CardDescription>{info.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default CandidateAdvantages;
