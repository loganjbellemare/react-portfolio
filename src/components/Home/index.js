import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-L.png'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../Logo'

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameString = 'OGAN'
  const jobString = 'Web Developer'

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters letterClass={letterClass} str="Hi," idx={10} />
          <br />
          <AnimatedLetters letterClass={letterClass} str="I'm" idx={13} />
          <img src={LogoTitle} alt="developer"></img>
          <AnimatedLetters
            letterClass={letterClass}
            str={nameString}
            idx={16}
          />
          <br />
          <AnimatedLetters letterClass={letterClass} str={jobString} idx={22} />
        </h1>
        <h2>Full Stack Developer / JavaScript Expert / Artist</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  )
}
