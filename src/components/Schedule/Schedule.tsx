import arrive from '../../assets/Wedding-Icon20.svg'
import ceremony from '../../assets/Wedding-Icon10.svg'
import drinks from '../../assets/Wedding-Icon7.svg'
import breakfast from '../../assets/Wedding-Icon45.svg'
import speeches from '../../assets/Wedding-Icon39.svg'
import cake from '../../assets/Wedding-Icon13.svg'
import dance from '../../assets/Wedding-Icon31.svg'
import eveningfood from '../../assets/Wedding-Icon36.svg'
import carriages from '../../assets/Wedding-Icon25.svg'

const Schedule = (): JSX.Element => {
  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-wedding-green text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <img
              src={arrive}
              alt="arrive"
              className="w-6 h-6 object-contain"
            />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">Arrive at Venue</div>
                  <time className="font-caveat font-medium">1:00pm</time>
              </div>
          </div>
      </div>
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-wedding-green text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <img
              src={ceremony}
              alt="ceremony"
              className="w-6 h-6 object-contain"
            />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">Ceremony</div>
                  <time className="font-caveat font-medium">2:00pm</time>
              </div>
          </div>
      </div>
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-wedding-green text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <img
              src={drinks}
              alt="drinks"
              className="w-6 h-6 object-contain fill-white"
            />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">Drinks</div>
                  <time className="font-caveat font-medium">2:30pm</time>
              </div>
          </div>
      </div>
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-wedding-green text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <img
              src={speeches}
              alt="speeches"
              className="w-6 h-6 object-contain"
            />
        </div>
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">Speeches</div>
                  <time className="font-caveat font-medium">4:00pm</time>
              </div>
          </div>
      </div>
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-wedding-green text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <img
              src={breakfast}
              alt="wedding breakfast"
              className="w-6 h-6 object-contain"
            />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">Wedding Breakfast</div>
                  <time className="font-caveat font-medium">4:15pm</time>
              </div>
          </div>
      </div>

      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-wedding-green text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <img
              src={cake}
              alt="cake"
              className="w-6 h-6 object-contain"
            />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">Cake</div>
                  <time className="font-caveat font-medium">6.30pm</time>
              </div>
          </div>
      </div>
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-wedding-green text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <img
              src={dance}
              alt="dance"
              className="w-6 h-6 object-contain"
            />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">First Dance</div>
                  <time className="font-caveat font-medium">7:30pm</time>
              </div>
          </div>
      </div>
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-wedding-green text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <img
              src={eveningfood}
              alt="evening food"
              className="w-6 h-6 object-contain"
            />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">Evening Food</div>
                  <time className="font-caveat font-medium">9:00pm</time>
              </div>
          </div>
      </div>
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-wedding-green text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <img
              src={carriages}
              alt="carriages"
              className="w-6 h-6 object-contain"
            />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">Carriages</div>
                  <time className="font-caveat font-medium">12.00am</time>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Schedule
