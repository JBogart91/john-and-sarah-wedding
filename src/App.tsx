import { NavigationBar } from './components/NavigationBar'
// import { Footer } from './components/Footer'

import { Route } from 'wouter'

import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { RSVP } from './pages/RSVP'
import { FAQS } from './pages/FAQS'

const App = (): JSX.Element => (
  <div className="font-content">
    <NavigationBar />
    <Route path="/">
      {() => <Home />}
    </Route>
    <Route path="/details">
      {() => <Details />}
    </Route>
    <Route path="/rsvp">
        {() => <RSVP />}
    </Route>
    <Route path="/faqs">
      {() => <FAQS />}
    </Route>
    <Route path="/contact">
      {() => <Contact />}
    </Route>
    {/* <Footer /> */}
  </div>
)

export default App
