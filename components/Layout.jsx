import React from "react"
import Head from "next/head"
import { Footer, Navbar } from "@/components"

const Layout = ({ children }) => {
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
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default Layout
