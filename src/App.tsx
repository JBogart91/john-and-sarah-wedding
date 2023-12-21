import { NavigationBar } from './components/NavigationBar'
import { Route } from 'wouter'

import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { OurStory } from './pages/OurStory'
import { RSVP } from './pages/RSVP'

const App = (): JSX.Element => (
  <>
    <NavigationBar />
    <main className="max-w-5xl m-auto border-solid border-2 border-grey border-t-0 p-4">
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
  </>
)

export default App
