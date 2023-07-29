import React from "react"
import { useEffect, useState } from "react"
import PropagateLoader from "react-spinners/PropagateLoader"
import Head from "next/head"
import { Footer, Navbar } from "@/components"

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div>
      <Head>
        <title>IEDC Bootcamp CEC</title>
        <link rel="icon" href="./favicon.ico" />
        <script type="module" src="/src/main.jsx"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
        <script type="module" src="/src/main.jsx"></script>
      </Head>
      <div className="flex flex-col h-screen justify-between">
        {loading ? (
          <div className="flex flex-grow items-center justify-center">
            <PropagateLoader color={"#000000"} loading={loading} size={30} />
          </div>
        ) : (
          <>
            <header>
              <Navbar />
            </header>
            <main className="flex-grow">{children}</main>
            <footer>
              <Footer />
            </footer>
          </>
        )}
      </div>
    </div>
  )
}

export default Layout
