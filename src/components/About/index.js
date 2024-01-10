import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitSquare,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            str={'The Wired Calls to Me'}
            idx={15}
          />
        </h1>
        <h2>
          <AnimatedLetters
            letterClass={letterClass}
            str={'(About me)'}
            idx={36}
          />
        </h2>
        <p>
          Experienced full-stack software engineer with expertise in JavaScript,
          React, HTML, CSS, API integration, Node.js, Express, PostgreSQL, and
          frameworks like Bootstrap. Adept at problem-solving, attention to
          detail, and delivering high-quality results, with a background in
          sushi craftsmanship demonstrating precision, adaptability, and
          teamwork.
        </p>
        <p>
          I started coding as a hobby through FreeCodeCamp and fell in love!
          I've always loved technology and creating things. Coding just seemed
          inaccessible to me for the longest time. Through dedication and hard
          work, I honed my skills through Thinkful's Software Engineering
          Bootcamp. Equipping me with enough comprehensive knowledge to build
          complex web apps all on my own! Looking to collaborate with motivated
          teams on innovative technology!
        </p>
        <p>
          I'm also a lifelong artist! As soon as I could pick up a pencil or
          crayon, I remember wanting to make art. I would spend hours drawing my
          favorite video game, anime, and cartoon characters. I have a
          professional education in traditional art, earning my Associate's
          Degree with a major in Fine Arts. I'm also a self-taught digital
          hobbyist, focusing on Procreate and Clip Studio Paint for my digital
          studios. I mostly focus on character design and fanart these days,
          love drawing my blorbos (original and fictive).
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cube-spinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faNodeJs} color="#68A063" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJs} color="#efd81d" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitSquare} color="#ec4d28" />
          </div>
        </div>
      </div>
    </div>
  )
}
