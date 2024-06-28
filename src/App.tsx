import { NavigationBar } from './components/NavigationBar'

import { Switch, Route, useRoute, useLocation } from 'wouter'

import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { RSVP } from './pages/RSVP'
import { FAQS } from './pages/FAQS'

const App = (): JSX.Element => {
  const [match] = useRoute('/')
  const [location] = useLocation()

  return (
    <div className="font-content">
      { !match ? <NavigationBar /> : null }
      <Switch>
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
        <Route>
          {() => (
            <div className='max-w-5xl m-auto border-t-0 p-4 text-center'>
              <h1 className='text-xl'><b>Error! 404:</b> Sorry, this page <code>&quot;{location}&quot;</code> doesn&apos;t exsist!</h1>
            </div>
          )}
        </Route>
      </Switch>
    </div>
  )
}

export default App
