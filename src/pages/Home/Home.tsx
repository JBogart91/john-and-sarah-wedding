import { Link } from 'wouter'
import { Schedule } from '../../components/Schedule'

const Home = (): JSX.Element => {
  return (
    <div className="grid grid-row-4 gap-0">
      <div className="row-span-1">
        <h1 className="font-header text-6xl text-center mb-2 hidden lg:block">John & Sarah</h1>
        <h2 className="font-header text-6xl text-center mb-4 hidden lg:block">are getting married!</h2>
        <img src="../src/assets/IMG_3932.jpeg" />
      </div>
      <div className="row-span-1 flex flex-col mt-4 text-center">
        <div className="flex flex-col text-center">
          <h1 className="font-header text-3xl mb-2 lg:hidden">John & Sarah</h1>
          <h2 className="font-header text-2xl mb-4 lg:hidden">are getting married!</h2>
        </div>
        <div className="md:grid md:grid-cols-12 md:gap-4">
          <div className="row-span-1 flex flex-col text-center md:col-span-4 md:col-start-2">
            <span className="pb-2 border-b-solid border-b-black border-b">Sandhole Oak Barn, Cheshire</span>
            <span className="pt-2">November 2nd 2024</span>
          </div>
          <div className="mt-4 md:mt-0 md:col-span-4 md:col-start-8">
            <div className="mb-2">We&apos;d love for you to join us!</div>
            <Link href={'/rsvp'}>
              <button className="bg-wedding-green hover:bg-lime-900 text-white font-bold py-2 px-4 rounded-full w-full h-12">
                RSVP
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row-span-1 mt-8">
        <h2 className="font-header text-2xl text-center mb-6 lg:text-4xl underline decoration-1 underline-offset-4">
          Schedule for the Day
        </h2>
        <Schedule />
      </div>
      <div className="row-span-1 mt-4">Venue</div>
    </div>
  )
}

export default Home
