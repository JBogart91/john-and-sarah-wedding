import { Accordion } from '../../components/Accordion'
import { useState } from 'react'

interface AccordionItem {
  key: number
  title: string
  data: string
  isOpen: boolean
}

const FAQS = (): JSX.Element => {
  const [accordions, setAccordions] = useState<AccordionItem[]>([
    {
      key: 1,
      title: 'This is an example question?',
      data: 'Example answer',
      isOpen: false
    },
    {
      key: 2,
      title: 'This is an example question?',
      data: 'Example answer',
      isOpen: false
    },
    {
      key: 3,
      title: 'This is an example question?',
      data: 'Example answer',
      isOpen: false
    }
  ])

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
