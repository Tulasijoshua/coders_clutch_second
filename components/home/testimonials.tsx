import { Section } from "@/components/ui/section";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    quote: "This platform has transformed how we handle our daily operations. The features are intuitive and the support is exceptional.",
    name: "John Doe",
    title: "CEO, TechCorp",
    rating: 5
  },
  {
    quote: "The best decision we made was switching to this platform. Our productivity has increased by 40% since implementation.",
    name: "Sarah Johnson",
    title: "CTO, InnovateX",
    rating: 5
  },
  {
    quote: "Outstanding customer service and a product that just works. We couldn't be happier with our choice.",
    name: "Michael Chen",
    title: "Product Manager, GrowthLabs",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <Section className="bg-muted/50 py-16">
      <div className="mx-auto max-w-container">
        <h2 className="mb-12 text-center text-3xl font-semibold">What Our Users Say</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <StarIcon key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10" />
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
} 