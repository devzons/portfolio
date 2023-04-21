import { useEffect, useState } from 'react'

import useMediaQuery from './hooks/useMediaQuery'
import {
  Navbar,
  DotGroup,
  Landing,
  MySkills,
  Projects,
  Testimonials,
  Contact,
  Footer,
} from './scenes'
import { LineGradient } from './components'

const App = () => {
  const [selectedPage, setSelectedPage] = useState('home')
  const [isAboveMediumScreen, setIsAboveMediumScreen] = useState(true)
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true)
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div className='app bg-deep-blue'>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing selectedPage={selectedPage} />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'>
        <MySkills isAboveMediumScreens={isAboveMediumScreens} />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto'>
        <Projects />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'>
        <Testimonials />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
