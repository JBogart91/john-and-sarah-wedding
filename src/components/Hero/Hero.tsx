import { Link } from 'wouter'
import hero from '../../assets/hero-mobile.jpeg'
import heroMobile from '../../assets/img-hero-mobile.jpeg'
import heroTablet from '../../assets/hero-img-tablet.jpeg'

const Hero = (): JSX.Element => (
  <>
    <div data-testid="hero-mobile" className="flex h-screen w-full md:hidden" style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover' }}>
       <div className=' bg-slate-100/75 mx-4 mt-12 pt-4 h-[420px] w-full font-header text-black text-border-white text-border-size-8 text-center'>
        <h1 className='text-4xl pt-6 mb-4 ' >John & Sarah</h1>
        <h2 className='text-2xl mb-4 ' >We&apos;re getting married!</h2>
        <h2 className='text-4xl mb-4'>2.11.24</h2>
        <h2 className='text-2xl mb-4'>Sandhole Oak Barn, Cheshire</h2>
        <div className=''>
          <Link href={'/rsvp'}>
            <button className="bg-wedding-green hover:bg-lime-900 text-white font-bold mb-4 py-2 px-4 rounded-full w-48 h-12">
              RSVP
            </button>
          </Link>
          <Link href={'/details'}>
            <button className="bg-wedding-green hover:bg-lime-900 text-white font-bold mb-4 py-2 px-4 rounded-full w-48 h-12">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
    <div data-testid="hero-tablet" className="hidden md:flex lg:hidden h-screen w-full" style={{ backgroundImage: `url(${heroMobile})`, backgroundSize: 'cover' }}>
      <div className=' bg-slate-100/75 mx-20 mt-16 pt-4 h-[420px] w-full font-header text-black text-border-white text-border-size-8 text-center'>
        <h1 className='text-6xl pt-8 mb-4 ' >John & Sarah</h1>
        <h2 className='text-4xl mb-2'>Join us as on our special day!</h2>
        <h2 className='text-5xl mb-4'>2.11.24</h2>
        <h2 className='text-4xl mb-4'>Sandhole Oak Barn, Cheshire</h2>
        <div className='grid grid-cols-6 gap-2'>
          <div className='col-start-2 col-span-1'>
            <Link href={'/rsvp'}>
              <button className="bg-wedding-green hover:bg-lime-900 text-white font-bold mb-4 py-2 px-4 rounded-full w-48 h-12">
                RSVP
              </button>
            </Link>
          </div>
          <div className='col-start-4 col-span-1'>
            <Link href={'/details'}>
              <button className="bg-wedding-green hover:bg-lime-900 text-white font-bold mb-4 py-2 px-4 rounded-full w-48 h-12">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div data-testid="hero-desktop" className="hidden h-screen w-full lg:flex flex-col items-center justify-center" style={{ backgroundImage: `url(${heroTablet})`, backgroundSize: 'cover' }}>
      <div className=' bg-slate-100/75 p-8 mx-16 font-header text-black text-border-white text-border-size-8 text-center'>
        <h1 className='text-8xl pt-8 mb-4 ' >John & Sarah</h1>
        <h2 className='text-5xl mb-4 hidden md:block'>Join us as we tie the knot!</h2>
        <h3 className='text-3xl md:text-6xl mb-4'>2.11.24</h3>
        <h3 className='text-4xl mb-4'>Sandhole Oak Barn, Cheshire</h3>
        <div className='grid grid-cols-4 gap-2'>
          <div className='col-start-2 col-span-1'>
            <Link href={'/rsvp'}>
              <button className="bg-wedding-green hover:bg-lime-900 text-white font-bold mb-4 py-2 px-4 rounded-full w-48 h-12">
                RSVP
              </button>
            </Link>
          </div>
          <div className='col-start-3 col-span-1'>
            <Link href={'/details'}>
              <button className="bg-wedding-green hover:bg-lime-900 text-white font-bold mb-4 py-2 px-4 rounded-full w-48 h-12">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Hero
