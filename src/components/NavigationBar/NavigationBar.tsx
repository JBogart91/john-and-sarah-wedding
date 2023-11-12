import { Navbar } from 'flowbite-react'

const NavigationBar = () => (
  <Navbar fluid rounded>
    <Navbar.Brand href="/">
      <img src="../../favicon.ico" className="mr-3 h-6 sm:h-9 lg:hidden" alt="J&S Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white lg:hidden">John & Sarah</span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link href="/" className='lg:hidden'>
        Home
      </Navbar.Link>
      <Navbar.Link href="/our-story">
        Our Story
      </Navbar.Link>
      <Navbar.Link href="/rsvp">
        RSVP
      </Navbar.Link>
      <Navbar.Link href="/contact">
        Contact Us
      </Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
)

export default NavigationBar
