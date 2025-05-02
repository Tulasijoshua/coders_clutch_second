import { Section } from "@/components/ui/section";
import { UsersIcon, StarIcon, ZapIcon } from "lucide-react";

const stats: StatItem[] = [
  {
    icon: <UsersIcon className="h-8 w-8 text-primary" />,
    value: "10K+",
    label: "Active Users"
  },
  {
    icon: <StarIcon className="h-8 w-8 text-primary" />,
    value: "4.9",
    label: "Average Rating"
  },
  {
    icon: <ZapIcon className="h-8 w-8 text-primary" />,
    value: "99.9%",
    label: "Uptime"
  }
];

export default function Stats() {
  return (
    <Section className="py-16">
      <div className="mx-auto grid max-w-container grid-cols-1 gap-8 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-2 text-center">
            {stat.icon}
            <div className="text-4xl font-bold text-primary">{stat.value}</div>
            <div className="text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
} 