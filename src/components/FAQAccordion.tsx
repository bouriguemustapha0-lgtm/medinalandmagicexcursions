import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/data/excursions";

export function FAQAccordion({ items, idPrefix = "faq" }: { items: readonly Faq[]; idPrefix?: string }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={item.q} value={`${idPrefix}-${index}`}>
          <AccordionTrigger className="py-5 text-left font-display text-base font-semibold md:text-lg">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
