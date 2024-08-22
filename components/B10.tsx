import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function B10() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>HTML cơ bản</AccordionTrigger>
        <AccordionContent>What is HTML?</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>CSS</AccordionTrigger>
        <AccordionContent>What is CSS</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Javacript</AccordionTrigger>
        <AccordionContent>What is Javascript</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
