import { Accordion } from '../../components/Accordion'
import questions from './questions'
import { useState } from 'react'
import type { AccordionItem } from './FAQSTypes'
import { Footer } from '../../components/Footer'

const FAQS = (): JSX.Element => {
  const [accordions, setAccordions] = useState<AccordionItem[]>(questions)

  const toggleAccordion = (accordionKey: number): void => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionKey) {
        return { ...accord, isOpen: !accord.isOpen }
      } else {
        return { ...accord, isOpen: false }
      }
    })

    setAccordions(updatedAccordions)
  }

  return (
    <main className="max-w-5xl m-auto border-t-0 p-4">
      <h1 className="font-header text-4xl text-center mb-6 md:text-6xl underline decoration-1 underline-offset-4">FAQs</h1>
      <div className="mt-8">
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.key}
            title={accordion.title}
            data={accordion.data}
            isOpen={accordion.isOpen}
            toggleAccordion={() => { toggleAccordion(accordion.key) }}
          />
        ))}
      </div>
      <Footer />
    </main>
  )
}

export default FAQS
