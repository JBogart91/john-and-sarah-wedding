import { NavigationBar } from './components/NavigationBar'
// import { Footer } from './components/Footer'

import { Route } from 'wouter'

import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { OurStory } from './pages/OurStory'
import { RSVP } from './pages/RSVP'

const App = (): JSX.Element => (
  <div className="font-content relative h-screen">
    <NavigationBar />
    <main className="max-w-5xl m-auto border-t-0 p-4">
      <Route path="/">
        {() => <Home />}
      </Route>
      <Route path="/our-story">
        {() => <OurStory />}
      </Route>
      <Route path="/rsvp">
        {() => <RSVP />}
      </Route>
      <Route path="/contact">
        {() => <Contact />}
      </Route>
    </main>
    {/* <Footer /> */}
  </div>
)

export default App
