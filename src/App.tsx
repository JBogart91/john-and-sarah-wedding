import React from 'react'
import { Link, Route } from "wouter";


function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">
        John and Sarah 2024

      </h1>
      <Link href="/about">To About</Link>
      <Route path="/about">
        {() => <div>About</div>}
      </Route>
    </>
  )
}

export default App;
