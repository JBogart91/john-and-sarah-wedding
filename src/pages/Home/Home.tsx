import { Link } from 'wouter'

const Home = (): JSX.Element => {
  return (
    <div className="grid">
      <div className="mb-4 md:relative">
        <img src="../src/assets/splash(2).jpeg" />
        <div className="hidden md:block md:absolute md:bg-white md:top-4 md:left-4">John & Sarah</div>
      </div>
      <div className="grid grid-rows-2 gap-4 md:hidden">
        <div className="grid grid-rows-2 divide-y divide-current">
          <span className="text-center md:text-xl pb-1">Sandhole Oak Barn, Cheshire</span>
          <span className="text-center md:text-xl">November 2nd 2024</span>
        </div>
        <Link href={'/rsvp'}>
          <button className="bg-lime-900 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full w-full h-12">
            RSVP
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
