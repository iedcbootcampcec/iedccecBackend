import Header from "./Header"
import { useState, useEffect, useRef } from "react"
import GLOBE from "vanta/dist/vanta.globe.min"

const Vanta = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0,
          size: 1.0,
          backgroundColor: 0xffffff,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <>
      <div ref={myRef} className="h-screen px-2 sm:px-16">
        <Header />
      </div>
    </>
  )
}

export default Vanta
