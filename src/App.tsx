import { NavigationBar } from "./components/NavigationBar"
import { Route } from "wouter";


const App = () => (
  <>
    <nav>
      <NavigationBar />
    </nav>
    <main>
      <Route path="/">
        {() => <div>Home</div>}
      </Route>
      <Route path="/our-story">
        {() => <div>Our Story</div>}
      </Route>
      <Route path="/rsvp">
        {() => <div>RSVP</div>}
      </Route>
      <Route path="/contact">
        {() => <div>Contact Us</div>}
      </Route>
    </main>
  </>
)

export default App
