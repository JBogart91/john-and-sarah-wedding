import { Link } from 'wouter'

const Home = (): JSX.Element => {
  return (
    <div className="grid">
      <div className="mb-4">
        <img src="../src/assets/splash(2).jpeg" />
      </div>
      <div>
        <div className="grid grid-cols-1 divide-y divide-current mb-4">
          <span className="text-center text-xl pb-1">Sandhole Oak Barn, Cheshire</span>
          <span className="text-center text-xl">November 2nd 2024</span>
        </div>
        <Link href={'/rsvp'}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
            RSVP
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
