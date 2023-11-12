import { Navbar } from 'flowbite-react'
// import NavigationItem from './NavigationItem'

const NavigationBar = () => (
  <Navbar fluid rounded>
    <Navbar.Brand href="">
      <img src="../../favicon.ico" className="mr-3 h-6 sm:h-9" alt="J&S Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white lg:hidden">John & Sarah</span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link href="#" active className='lg:hidden'>
        Home
      </Navbar.Link>
      <Navbar.Link href="#">Our Story</Navbar.Link>
      <Navbar.Link href="#">
        RSVP
      </Navbar.Link>
      <Navbar.Link href="#">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
)

export default NavigationBar
