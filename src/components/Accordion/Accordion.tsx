import React from 'react'

interface AccordionProps {
  title: string
  data: string
  isOpen: boolean
  toggleAccordion: () => void
}

const Accordion: React.FC<AccordionProps> = props => {
  return (
    <div className="border rounded-md mb-1">
      <button
        className="w-full p-4 text-left bg-wedding-green hover:bg-lime-900 transition duration-300 text-white"
        onClick={props.toggleAccordion}
      >
        {props.title}
        <span className={`float-right transform ${props.isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}
        >
          &#9660;
        </span>
      </button>
      {props.isOpen && (
        <div className="p-4 bg-white">
          {props.data}
        </div>
      )}
    </div>
  )
}

export default Accordion
