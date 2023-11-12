import { NavigationBar } from "./components/NavigationBar"

const App = () => (
  <>
    <nav>
      <NavigationBar />
    </nav>
    <main>
      <h1 className="text-3xl font-bold underline text-blue-500">
        Hello world!
      </h1>
    </main>
  </>
)

export default App
