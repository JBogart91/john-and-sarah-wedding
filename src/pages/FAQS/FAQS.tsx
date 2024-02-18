import { Accordion } from '../../components/Accordion'
import questions from './questions'
import { useState } from 'react'
import type { AccordionItem } from './FAQSTypes'

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
    <div>
      <h1 className="font-header text-6xl text-center">FAQs</h1>
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
    </div>
  )
}

export default FAQS
