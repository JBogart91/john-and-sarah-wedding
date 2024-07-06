import { Schedule } from '../../components/Schedule'
import { Footer } from '../../components/Footer'

const Details = (): JSX.Element => {
  return (
    <main>
      <div className="max-w-5xl m-auto border-t-0 p-4">
        <h1 className="font-header text-4xl text-center mb-6 md:text-6xl underline decoration-1 underline-offset-4">
          Details
        </h1>
        <div className="md:grid md:grid-cols-2 gap-4">
          <div className="mb-4">
            <h3 className="text-center text-xl font-header md:text-4xl mb-4 underline decoration-1 underline-offset-4">When</h3>
            <p>November 2nd 2024</p>
            <p>Ceremony: 2pm</p>
          </div>
          <div>
            <h3 className="text-center text-xl font-header md:text-4xl mb-4 underline decoration-1 underline-offset-4">Where</h3>
            <p>Sandhole Oak Barn,</p>
            <p>Manchester Road(A34),</p>
            <p>Congleton,</p>
            <p>Cheshire,</p>
            <p>CW12 2JH</p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl m-auto border-t-0 p-4">
        <h2 className="font-header text-2xl text-center mb-6 md:text-4xl underline decoration-1 underline-offset-4">
          Dress Code
        </h2>
        <p className="mb-2">We would love to see you in your Sunday best! Tuxes, suits, kilts, dresses etc. are all welcome!</p>
      </div>
      <div className="max-w-5xl m-auto border-t-0 p-4">
        <h2 className="font-header text-2xl text-center mb-6 md:text-4xl underline decoration-1 underline-offset-4">
          Accomodation
        </h2>
        <p className="mb-2">There is some accomodation at the venue. Our family and wedding party will get priority for the rooms but there may be spare rooms availble. Please get in touch if you are interested in a room and we&rsquo;ll see what we can do!</p>
        <p className="mb-2"> There is plenty of accomodation local to the venue. Fortunately, the venue&rsquo;s website lists local available accomodation.</p>
        <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.sandholeoakbarn-weddings.co.uk/accommodation/">Accomodation Guide for Sandhole Oak Barn</a>
      </div>
      <div className="max-w-5xl m-auto border-t-0 p-4">
        <h2 className="font-header text-2xl text-center mb-6 md:text-4xl underline decoration-1 underline-offset-4">
          Wedding Registry
        </h2>
        <p className="mb-2">Please do not feel obliged to get us something, you joining us is gift enough! However, we do have a wish list and the link will be found below. We will also have a collection for Great Ormond Steet Hospital on the day if you&apos;d prefer to donate to a charity!</p>
        <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.johnlewis.com/wish-list/QTMNHKT">Our Wish list</a>
      </div>
      <div className="max-w-5xl m-auto border-t-0 p-4">
        <h2 className="font-header text-2xl text-center mb-6 md:text-4xl underline decoration-1 underline-offset-4">
          Schedule of the Day
        </h2>
        <Schedule />
      </div>
      <Footer />
    </main>
  )
}

export default Details
