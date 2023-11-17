import React from 'react'
import { useMediaQuery } from 'react-responsive'

import { Navbar } from 'flowbite-react'
import { Link } from 'wouter'

const { useState } = React

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  const handleClick = () => {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }

  console.log('in Nav bar', isOpen)
  return (
    <Navbar>
      <Navbar.Brand as={Link} href="/">
        <img src="../../favicon.ico" className="mr-3 h-6 sm:h-9" alt="J&S Logo" />
      </Navbar.Brand>
      <Navbar.Toggle onClick={handleClick} />
      <Navbar.Collapse className={isOpen ? '' : 'hidden'}>
        <Navbar.Link as={Link} href="/" className='lg:hidden'>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/our-story" onClick={handleClick}>
          Our Story
        </Navbar.Link>
        <Navbar.Link as={Link} href="/rsvp" onClick={handleClick}>
          RSVP
        </Navbar.Link>
        <Navbar.Link as={Link} href="/contact" onClick={handleClick}>
          Contact Us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
