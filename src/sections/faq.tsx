import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { faqs } from "@/constant";

const FAQ = () => {
  return (
    <section className="bg-gradient-to-b from-[#fff] to-[#d2dcff] py-24">
      <div className="container mx-auto px-4 md:px-0">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] heading mt-5">
            Frequently Asked Questions
          </h2>
        </div>
        <div>
          <Accordion className="mt-5" type="single" collapsible>
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
                <AccordionTrigger className="md:text-[20px]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="md:text-[20px]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
