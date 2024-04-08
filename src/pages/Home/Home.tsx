import { Schedule } from '../../components/Schedule'
import { Hero } from '../../components/Hero'

const Home = (): JSX.Element => {
  return (
    <main>
      <Hero />
      {/**
       * insert sandhole venue details here
       */}
      <div className="max-w-5xl m-auto border-t-0 p-4">
        <h2 className="font-header text-2xl text-center mb-6 lg:text-4xl underline decoration-1 underline-offset-4">
          Schedule for the Day
        </h2>
        <Schedule />
      </div>
    </main>
  )
}

export default Home
