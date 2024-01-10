import './index.scss'
import LogoL from '../../assets/images/Logo-s.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'

export default function Logo() {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })

      .fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 2,
          duration: 4,
        }
      )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" ref={solidLogoRef} src={LogoL} alt="L" />
    </div>
  )
}
