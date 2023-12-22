import { Link } from 'wouter'

const Home = (): JSX.Element => {
  return (
    <div className="grid">
      <img src="../src/assets/splash(2).jpeg" />
      <h1 className="font-header text-5xl sm:text-8xl hidden sm:block absolute text-white">John & Sarah</h1>
      <div>
        <span className="text-center text-2xl">November 2nd 2024</span>
        <Link href={'/rsvp'}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-1/2">
            RSVP
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
