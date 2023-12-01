interface NavigationLink {
  id: string
  link: string
  title: string
}

const NavigationLinks: NavigationLink[] = [
  {
    id: 'home',
    link: '/',
    title: 'Home'
  },
  {
    id: 'our-story',
    link: '/our-story',
    title: 'Our Story'
  },
  {
    id: 'rsvp',
    link: '/rsvp',
    title: 'RSVP'
  },
  {
    id: 'contact',
    link: '/contact',
    title: 'Contact Us'
  }
]

export default NavigationLinks
