import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <Section className="py-16">
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Ready to Get Started?</h2>
        <p className="max-w-[600px] text-muted-foreground">
          Join thousands of satisfied users who have already transformed their workflow with our platform.
        </p>
        <div className="flex gap-4">
          <Button size="lg" asChild>
            <Link href="/signup">
              Start Free Trial
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/demo">Schedule Demo</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
} 