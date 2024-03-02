import { Link } from 'wouter'
import { Schedule } from '../../components/Schedule'

const Home = (): JSX.Element => {
  return (
    <main>
      <div className='h-full w-full bg-black' >
        <div className='mx-16'>
          <h1 className='text-white font-bold text-[5rem] mb-4' >John and Sarah</h1>
          <h3 className='text-white text-[2rem] font-bold mb-4'>We&apos;re getting married!</h3>
          <Link href={'/rsvp'}>
            <button className="bg-wedding-green hover:bg-lime-900 text-white font-bold mb-4 py-2 px-4 rounded-full w-48 h-12">
              RSVP
            </button>
          </Link>
        </div>
      </div>
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
