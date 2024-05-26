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
    id: 'details',
    link: '/details',
    title: 'Details'
  },
  {
    id: 'rsvp',
    link: '/rsvp',
    title: 'RSVP'
  },
  {
    id: 'faqs',
    link: '/faqs',
    title: 'FAQs'
  },
  {
    id: 'contact',
    link: '/contact',
    title: 'Contact Us'
  }
]

export default NavigationLinks
