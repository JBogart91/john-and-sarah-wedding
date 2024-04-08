import { Link } from 'wouter'
import hero from '../../assets/hero-img.jpeg'

const Hero = (): JSX.Element => (
  <>
    <div data-testid="hero-mobile" className="flex h-screen w-full md:hidden" style={{ backgroundImage: `url(${hero})` }}>
       <div className=' bg-slate-100/75 mx-4 mt-16 pt-4 h-[420px] w-full font-header text-black text-border-white text-border-size-8 text-center'>
        <h1 className='text-3xl pt-8 mb-4 ' >John & Sarah</h1>
        <h2 className='text-3xl mb-4'>Join us as we tie the knot!</h2>
        <h2 className='text-3xl mb-4'>2.11.24</h2>
        <h2 className='text-2xl mb-4'>Sandhole Oak Barn, Cheshire</h2>
        <Link href={'/rsvp'}>
          <button className="bg-wedding-green hover:bg-lime-900 text-white font-bold mb-4 py-2 px-4 rounded-full w-48 h-12">
            RSVP
          </button>
        </Link>
      </div>
    </div>
    <div data-testid="hero-tablet" className="hidden md:flex lg:hidden h-screen w-full" style={{ backgroundImage: `url(${hero})` }}>
      <div className=' bg-slate-100/75 mx-4 mt-16 pt-4 h-[420px] w-full font-header text-black text-border-white text-border-size-8 text-center'>
        <h1 className='text-7xl pt-8 mb-4 ' >John & Sarah</h1>
        <h2 className='text-5xl mb-4'>Join us as we tie the knot!</h2>
        <h2 className='text-5xl mb-4'>2.11.24</h2>
        <h2 className='text-4xl mb-4'>Sandhole Oak Barn, Cheshire</h2>
        <Link href={'/rsvp'}>
          <button className="bg-wedding-green hover:bg-lime-900 text-white font-bold mb-4 py-2 px-4 rounded-full w-48 h-12">
            RSVP
          </button>
        </Link>
      </div>
    </div>
    <div data-testid="hero-desktop" className="hidden h-screen w-full lg:flex flex-col items-center justify-center" style={{ backgroundImage: `url(${hero})` }}>
      <div className=' bg-slate-100/75 p-8 mx-16 font-header text-black text-border-white text-border-size-8 text-center'>
        <h1 className='text-8xl pt-8 mb-4 ' >John & Sarah</h1>
        <h2 className='text-5xl mb-4 hidden md:block'>Join us as we tie the knot!</h2>
        <h3 className='text-3xl md:text-6xl mb-4'>2.11.24</h3>
        <h3 className='text-4xl mb-4'>Sandhole Oak Barn, Cheshire</h3>
        <Link href={'/rsvp'}>
          <button className="bg-wedding-green hover:bg-lime-900 text-white font-bold mb-4 py-2 px-4 rounded-full w-48 h-12">
            RSVP
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default Hero
