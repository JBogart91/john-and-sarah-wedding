import React from 'react'

import NavigationLinks from './NavigationLinks'
import menuBurger from '../../assets/menu-burger.svg'
import close from '../../assets/close.svg'
import { Link, useLocation } from 'wouter'

const { useState } = React

const NavigationBar = (): JSX.Element => {
  const [location] = useLocation()

  const [toggle, setToggle] = useState<boolean>(false)
  const [active, setActive] = useState<string>(location)

  const handleMobileClick = (link: string): void => {
    setToggle(!toggle)
    setActive(link)
  }

  return (
    <nav className="w-full flex py-4 justify-between items-center navbar border-b-4 border-solid">
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {NavigationLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer text-base
              ${active === nav.link ? 'border-b-2 border-solid border-black' : ''}
              ${index === NavigationLinks.length - 1 ? 'mr-4' : 'mr-6'}`
            }
           >
            <Link href={nav.link} onClick={() => { setActive(nav.link) }}>{nav.title}</Link>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={menuBurger}
          alt="menu"
          className="w-6 h-6 object-contain mr-6"
          onClick={() => { setToggle(!toggle) }}
        />
        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 absolute top-0 h-full right-0 flex-col border-4 border-solid bg-white`}
        >
          <img
            src={close}
            alt="close menu"
            className="w-4 h-4 mb-6 ml-20"
            onClick={() => { setToggle(!toggle) }}
          />
          <ul className="list-none flex items-start flex-1 flex-col">
            {NavigationLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-medium cursor-pointer text-base 
                  ${index === NavigationLinks.length - 1 ? 'mb-0' : 'mb-4'}
                  ${active === nav.link ? 'border-b-2 border-solid border-black' : ''}`
                }
                onClick={() => { handleMobileClick(nav.link) }}
              >
                <Link href={nav.link}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default NavigationBar
