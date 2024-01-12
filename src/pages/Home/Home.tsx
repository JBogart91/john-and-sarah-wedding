import { Link } from 'wouter'

const Home = (): JSX.Element => {
  return (
    <div className="grid grid-row-4 gap-0">
      <div className="row-span-1">
        <img src="../src/assets/splash(2).jpeg" />
      </div>
      <div className="row-span-1 flex flex-col mt-4 text-center">
        <div className="flex flex-col text-center">
          <h1 className="font-header text-3xl mb-2">John & Sarah</h1>
          <h2 className="font-header text-2xl mb-2">We&apos;re getting married!</h2>
          <span className="pb-2 border-b-solid border-b-black border-b">Sandhole Oak Barn, Cheshire</span>
          <span className="pt-2">November 2nd 2024</span>
        </div>
        <div>
          <div className="mb-2">We&apos;d love for you to join us!</div>
          <Link href={'/rsvp'}>
            <button className="bg-lime-900 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full w-full h-12">
              RSVP
            </button>
          </Link>
        </div>
      </div>
      <div className="row-span-1 mt-4">Schedule for the Day</div>
      <div className="row-span-1 mt-4">Venue</div>
    </div>
  )
}

export default Home
