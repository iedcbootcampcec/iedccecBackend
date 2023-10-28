import React, { useRef, useState, useEffect } from "react"
import { FaTimes, FaBars } from "react-icons/fa"
import Image from "next/image"
import logo from "../images/logo.webp"
import Link from "next/link"
const Navbar = () => {
  const [nav, setNav] = useState(false)

  const navbg = () => {
    if (window.scrollY >= 90) {
      setNav(true)
    } else {
      setNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", navbg)

    return () => {
      window.removeEventListener("scroll", navbg)
    }
  }, [])

  const navRef = useRef()
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav")
  }
  return (
    <header className={nav && "header-bg"}>
      <div className=" px-[5%] flex">
        <div className="w-[40px] h-[40px] self-center justify-center">
          <Image width={50} height={50} src={logo} />
        </div>
        <Link className="flex" href="/">
          <svg
            width="70"
            height="30"
            viewBox="0 0 604 362"
            fill="none"
            className=" self-center justify-center "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H47V242H0V0Z" fill="black" />
            <path d="M77 141V101H235V141H77Z" fill="black" />
            <path d="M77 242V201H235V242H77Z" fill="black" />
            <path d="M77 41V0H235V41H77Z" fill="black" />
            <path
              d="M462.361 59.7625C478.105 30.013 508.297 9.16007 543.578 3.66871C549.279 2.7811 562.772 2.16784 577.979 2.10436L603 2V42.6827L577.979 43.1249C554.439 43.5402 552.447 43.735 544.348 46.415C526.339 52.3722 513.338 63.2549 505.216 79.1706C492.464 104.16 492.251 139.497 504.696 165.444C509.919 176.332 521.774 188.381 532.642 193.847C545.096 200.11 551.992 201.301 579.055 201.857L603 202.35V243L580.669 242.991C544.461 242.976 530.416 240.522 509.91 230.625C491.72 221.847 478.931 211.066 468.552 195.763C443.779 159.235 441.081 99.974 462.361 59.7625Z"
              fill="black"
            />
            <path
              d="M264 43.9598V2.88438L296.017 3.33303C326.279 3.75693 328.6 3.93446 338.385 6.55856C382.803 18.4741 411.927 51.3383 419.514 98.1074C421.56 110.718 421.57 135.296 419.534 147.843C412.141 193.415 382.263 226.819 338.758 238.149C324.7 241.809 312.298 242.939 285.793 242.972L264 243V201.04H289.224C318.074 201.04 324.55 200.037 336.609 193.706C350.924 186.189 362.94 172.093 368.427 156.38C375.212 136.949 375.478 107.342 369.028 89.3528C361.192 67.5025 344.149 51.6083 322.666 46.1148C315.414 44.2611 310.728 43.9598 289.118 43.9598H264Z"
              fill="black"
            />
            <path
              d="M0.84 274H20.88C22.96 274 24.86 274.28 26.58 274.84C28.34 275.4 29.84 276.2 31.08 277.24C32.36 278.24 33.34 279.46 34.02 280.9C34.74 282.3 35.1 283.86 35.1 285.58C35.1 287.46 34.6 289.18 33.6 290.74C32.64 292.26 31.36 293.48 29.76 294.4C31.72 295.32 33.32 296.58 34.56 298.18C35.84 299.78 36.48 301.64 36.48 303.76C36.48 305.6 36.12 307.28 35.4 308.8C34.68 310.28 33.66 311.56 32.34 312.64C31.06 313.72 29.52 314.56 27.72 315.16C25.96 315.72 24 316 21.84 316H0.84V274ZM20.28 281.56H10.02V291.04H18.36C19.28 291.04 20.18 290.98 21.06 290.86C21.98 290.74 22.8 290.52 23.52 290.2C24.24 289.88 24.82 289.42 25.26 288.82C25.7 288.18 25.92 287.34 25.92 286.3C25.92 284.86 25.38 283.72 24.3 282.88C23.26 282 21.92 281.56 20.28 281.56ZM21.12 308.44C22.92 308.44 24.38 307.98 25.5 307.06C26.62 306.14 27.18 304.88 27.18 303.28C27.18 301.72 26.62 300.48 25.5 299.56C24.38 298.64 22.92 298.18 21.12 298.18H10.02V308.44H21.12Z"
              fill="black"
            />
            <path
              d="M121.395 295C121.395 298 120.815 300.82 119.655 303.46C118.535 306.1 116.975 308.4 114.975 310.36C113.015 312.32 110.695 313.86 108.015 314.98C105.335 316.1 102.435 316.66 99.3145 316.66C96.3545 316.66 93.5345 316.14 90.8545 315.1C88.1745 314.02 85.8145 312.54 83.7745 310.66C81.7745 308.74 80.1745 306.46 78.9745 303.82C77.7745 301.14 77.1745 298.2 77.1745 295C77.1745 292.08 77.7145 289.32 78.7945 286.72C79.9145 284.08 81.4545 281.78 83.4145 279.82C85.3745 277.82 87.7145 276.24 90.4345 275.08C93.1545 273.92 96.1145 273.34 99.3145 273.34C102.275 273.34 105.075 273.88 107.715 274.96C110.395 276.04 112.735 277.54 114.735 279.46C116.775 281.38 118.395 283.66 119.595 286.3C120.795 288.94 121.395 291.84 121.395 295ZM111.975 295C111.975 293.12 111.635 291.38 110.955 289.78C110.315 288.14 109.415 286.74 108.255 285.58C107.135 284.38 105.795 283.44 104.235 282.76C102.715 282.08 101.075 281.74 99.3145 281.74C97.6745 281.74 96.0745 282.06 94.5145 282.7C92.9945 283.3 91.6345 284.18 90.4345 285.34C89.2745 286.46 88.3345 287.84 87.6145 289.48C86.9345 291.12 86.5945 292.96 86.5945 295C86.5945 296.8 86.8945 298.5 87.4945 300.1C88.0945 301.7 88.9545 303.1 90.0745 304.3C91.1945 305.5 92.5345 306.46 94.0945 307.18C95.6545 307.9 97.3945 308.26 99.3145 308.26C100.995 308.26 102.595 307.94 104.115 307.3C105.635 306.66 106.975 305.76 108.135 304.6C109.295 303.44 110.215 302.06 110.895 300.46C111.615 298.82 111.975 297 111.975 295Z"
              fill="black"
            />
            <path
              d="M206.203 295C206.203 298 205.623 300.82 204.463 303.46C203.343 306.1 201.783 308.4 199.783 310.36C197.823 312.32 195.503 313.86 192.823 314.98C190.143 316.1 187.243 316.66 184.123 316.66C181.163 316.66 178.343 316.14 175.663 315.1C172.983 314.02 170.623 312.54 168.583 310.66C166.583 308.74 164.983 306.46 163.783 303.82C162.583 301.14 161.983 298.2 161.983 295C161.983 292.08 162.523 289.32 163.603 286.72C164.723 284.08 166.263 281.78 168.223 279.82C170.183 277.82 172.523 276.24 175.243 275.08C177.963 273.92 180.923 273.34 184.123 273.34C187.083 273.34 189.883 273.88 192.523 274.96C195.203 276.04 197.543 277.54 199.543 279.46C201.583 281.38 203.203 283.66 204.403 286.3C205.603 288.94 206.203 291.84 206.203 295ZM196.783 295C196.783 293.12 196.443 291.38 195.763 289.78C195.123 288.14 194.223 286.74 193.063 285.58C191.943 284.38 190.603 283.44 189.043 282.76C187.523 282.08 185.883 281.74 184.123 281.74C182.483 281.74 180.883 282.06 179.323 282.7C177.803 283.3 176.443 284.18 175.243 285.34C174.083 286.46 173.143 287.84 172.423 289.48C171.743 291.12 171.403 292.96 171.403 295C171.403 296.8 171.703 298.5 172.303 300.1C172.903 301.7 173.763 303.1 174.883 304.3C176.003 305.5 177.343 306.46 178.903 307.18C180.463 307.9 182.203 308.26 184.123 308.26C185.803 308.26 187.403 307.94 188.923 307.3C190.443 306.66 191.783 305.76 192.943 304.6C194.103 303.44 195.023 302.06 195.703 300.46C196.423 298.82 196.783 297 196.783 295Z"
              fill="black"
            />
            <path
              d="M243.309 282.1V274H280.269V282.1H266.409V316H257.229V282.1H243.309Z"
              fill="black"
            />
            <path
              d="M339.982 308.14C344.302 308.14 347.902 306.36 350.782 302.8C351.822 303.8 352.822 304.8 353.782 305.8C354.782 306.76 355.802 307.74 356.842 308.74C354.762 311.22 352.182 313.16 349.102 314.56C346.022 315.92 342.882 316.6 339.682 316.6C336.602 316.6 333.702 316.06 330.982 314.98C328.302 313.9 325.942 312.4 323.902 310.48C321.902 308.56 320.302 306.28 319.102 303.64C317.942 301 317.362 298.12 317.362 295C317.362 292.04 317.922 289.24 319.042 286.6C320.162 283.96 321.702 281.66 323.662 279.7C325.662 277.74 328.022 276.2 330.742 275.08C333.502 273.92 336.482 273.34 339.682 273.34C341.362 273.34 343.022 273.54 344.662 273.94C346.342 274.3 347.922 274.82 349.402 275.5C350.922 276.18 352.342 277.02 353.662 278.02C354.982 278.98 356.122 280.08 357.082 281.32C356.042 282.36 355.002 283.38 353.962 284.38C352.962 285.34 351.942 286.34 350.902 287.38C349.502 285.62 347.822 284.24 345.862 283.24C343.942 282.24 341.882 281.74 339.682 281.74C337.922 281.74 336.262 282.06 334.702 282.7C333.142 283.34 331.782 284.26 330.622 285.46C329.462 286.62 328.522 288.02 327.802 289.66C327.122 291.26 326.782 293.04 326.782 295C326.782 296.8 327.102 298.5 327.742 300.1C328.382 301.7 329.282 303.1 330.442 304.3C331.642 305.5 333.042 306.44 334.642 307.12C336.282 307.8 338.062 308.14 339.982 308.14Z"
              fill="black"
            />
            <path
              d="M393.908 316L411.008 274H421.568L438.428 316H428.528L424.448 305.26H407.588L403.508 316H393.908ZM410.408 297.94H421.748L416.108 283L410.408 297.94Z"
              fill="black"
            />
            <path
              d="M500.791 313L486.511 285.7V316H478.051V274H489.751L500.851 295.84L512.011 274H523.711V316H515.011V285.82L500.791 313Z"
              fill="black"
            />
            <path
              d="M567.371 316V274H588.551C590.591 274 592.471 274.34 594.191 275.02C595.911 275.66 597.391 276.58 598.631 277.78C599.911 278.94 600.891 280.34 601.571 281.98C602.291 283.62 602.651 285.42 602.651 287.38C602.651 289.3 602.291 291.06 601.571 292.66C600.891 294.26 599.911 295.66 598.631 296.86C597.391 298.02 595.911 298.92 594.191 299.56C592.471 300.2 590.591 300.52 588.551 300.52H576.551V316H567.371ZM587.471 281.86H576.551V292.9H585.371C586.411 292.9 587.411 292.84 588.371 292.72C589.371 292.56 590.231 292.28 590.951 291.88C591.711 291.48 592.311 290.94 592.751 290.26C593.191 289.54 593.411 288.6 593.411 287.44C593.411 285.76 592.871 284.42 591.791 283.42C590.711 282.38 589.271 281.86 587.471 281.86Z"
              fill="black"
            />
            <path
              d="M9.96 358.288C10.84 358.288 11.664 358.104 12.432 357.736C13.2 357.368 13.872 356.824 14.448 356.104C14.816 356.456 15.168 356.808 15.504 357.16C15.856 357.496 16.208 357.84 16.56 358.192C16.144 358.672 15.68 359.104 15.168 359.488C14.656 359.856 14.104 360.176 13.512 360.448C12.936 360.704 12.336 360.896 11.712 361.024C11.088 361.168 10.464 361.24 9.84 361.24C8.608 361.24 7.456 361.024 6.384 360.592C5.312 360.16 4.376 359.56 3.576 358.792C2.792 358.024 2.168 357.112 1.704 356.056C1.24 355 1.008 353.848 1.008 352.6C1.008 351.416 1.224 350.296 1.656 349.24C2.104 348.184 2.72 347.264 3.504 346.48C4.304 345.696 5.24 345.08 6.312 344.632C7.384 344.168 8.56 343.936 9.84 343.936C11.168 343.936 12.432 344.208 13.632 344.752C14.848 345.296 15.856 346.048 16.656 347.008L14.496 349.168C13.92 348.448 13.224 347.888 12.408 347.488C11.608 347.088 10.752 346.888 9.84 346.888C9.072 346.888 8.352 347.032 7.68 347.32C7.008 347.608 6.424 348.008 5.928 348.52C5.432 349.016 5.04 349.616 4.752 350.32C4.464 351.024 4.32 351.784 4.32 352.6C4.32 353.384 4.456 354.12 4.728 354.808C5.016 355.496 5.408 356.104 5.904 356.632C6.4 357.144 6.992 357.552 7.68 357.856C8.368 358.144 9.128 358.288 9.96 358.288Z"
              fill="#090000"
            />
            <path
              d="M38.3207 352.6C38.3207 353.8 38.0967 354.928 37.6487 355.984C37.2007 357.04 36.5847 357.96 35.8007 358.744C35.0167 359.528 34.0887 360.144 33.0167 360.592C31.9607 361.04 30.8167 361.264 29.5847 361.264C28.4007 361.264 27.2807 361.048 26.2247 360.616C25.1687 360.184 24.2407 359.584 23.4407 358.816C22.6567 358.048 22.0327 357.136 21.5687 356.08C21.1047 355.008 20.8727 353.848 20.8727 352.6C20.8727 351.432 21.0887 350.32 21.5207 349.264C21.9527 348.208 22.5527 347.288 23.3207 346.504C24.1047 345.72 25.0247 345.096 26.0807 344.632C27.1527 344.168 28.3207 343.936 29.5847 343.936C30.7527 343.936 31.8647 344.152 32.9207 344.584C33.9927 345.016 34.9207 345.624 35.7047 346.408C36.5047 347.176 37.1367 348.088 37.6007 349.144C38.0807 350.2 38.3207 351.352 38.3207 352.6ZM35.0087 352.6C35.0087 351.8 34.8647 351.056 34.5767 350.368C34.3047 349.664 33.9287 349.056 33.4487 348.544C32.9687 348.032 32.3927 347.632 31.7207 347.344C31.0647 347.04 30.3527 346.888 29.5847 346.888C28.8647 346.888 28.1767 347.024 27.5207 347.296C26.8647 347.568 26.2887 347.96 25.7927 348.472C25.2967 348.968 24.8967 349.568 24.5927 350.272C24.3047 350.976 24.1607 351.752 24.1607 352.6C24.1607 353.384 24.2887 354.128 24.5447 354.832C24.8167 355.52 25.1927 356.12 25.6727 356.632C26.1527 357.144 26.7207 357.552 27.3767 357.856C28.0487 358.16 28.7847 358.312 29.5847 358.312C30.3047 358.312 30.9927 358.176 31.6487 357.904C32.3047 357.616 32.8807 357.224 33.3767 356.728C33.8727 356.216 34.2647 355.616 34.5527 354.928C34.8567 354.224 35.0087 353.448 35.0087 352.6Z"
              fill="#090000"
            />
            <path
              d="M44.0332 361V344.2H47.2492V358.168H56.3693V361H44.0332Z"
              fill="#090000"
            />
            <path
              d="M62.0693 361V344.2H65.2853V358.168H74.4053V361H62.0693Z"
              fill="#090000"
            />
            <path
              d="M80.1052 361V344.2H92.6572V346.984H83.3213V351.16H89.6092V353.872H83.3213V358.216H92.7533V361H80.1052Z"
              fill="#090000"
            />
            <path
              d="M114.019 352.696C114.019 353.864 113.819 354.968 113.419 356.008C113.019 357.048 112.451 357.96 111.715 358.744C110.979 359.512 110.099 360.128 109.075 360.592C108.067 361.04 106.947 361.264 105.715 361.264C104.499 361.264 103.355 361.048 102.283 360.616C101.227 360.168 100.299 359.56 99.4987 358.792C98.6987 358.008 98.0668 357.088 97.6028 356.032C97.1388 354.976 96.9068 353.832 96.9068 352.6C96.9068 351.432 97.1227 350.328 97.5547 349.288C98.0027 348.232 98.6108 347.312 99.3788 346.528C100.163 345.728 101.091 345.096 102.163 344.632C103.235 344.168 104.403 343.936 105.667 343.936C107.027 343.936 108.307 344.208 109.507 344.752C110.723 345.296 111.739 346.048 112.555 347.008C112.187 347.36 111.811 347.712 111.427 348.064C111.059 348.4 110.691 348.736 110.323 349.072C109.747 348.384 109.051 347.848 108.235 347.464C107.435 347.08 106.579 346.888 105.667 346.888C104.899 346.888 104.179 347.032 103.507 347.32C102.851 347.608 102.275 348.008 101.779 348.52C101.299 349.032 100.915 349.64 100.627 350.344C100.355 351.032 100.219 351.784 100.219 352.6C100.219 353.4 100.355 354.152 100.627 354.856C100.899 355.544 101.283 356.152 101.779 356.68C102.275 357.192 102.859 357.6 103.531 357.904C104.203 358.208 104.947 358.36 105.763 358.36C106.371 358.36 106.939 358.272 107.467 358.096C108.011 357.904 108.491 357.64 108.907 357.304C109.339 356.952 109.699 356.536 109.987 356.056C110.291 355.576 110.499 355.048 110.611 354.472H105.619V351.664H114.019V352.696Z"
              fill="#090000"
            />
            <path
              d="M119.74 361V344.2H132.292V346.984H122.956V351.16H129.244V353.872H122.956V358.216H132.388V361H119.74Z"
              fill="#090000"
            />
            <path
              d="M163.049 352.6C163.049 353.8 162.825 354.928 162.377 355.984C161.929 357.04 161.313 357.96 160.529 358.744C159.745 359.528 158.817 360.144 157.745 360.592C156.689 361.04 155.545 361.264 154.313 361.264C153.129 361.264 152.009 361.048 150.953 360.616C149.897 360.184 148.969 359.584 148.169 358.816C147.385 358.048 146.761 357.136 146.297 356.08C145.833 355.008 145.601 353.848 145.601 352.6C145.601 351.432 145.817 350.32 146.249 349.264C146.681 348.208 147.281 347.288 148.049 346.504C148.833 345.72 149.753 345.096 150.809 344.632C151.881 344.168 153.049 343.936 154.313 343.936C155.481 343.936 156.593 344.152 157.649 344.584C158.721 345.016 159.649 345.624 160.433 346.408C161.233 347.176 161.865 348.088 162.329 349.144C162.809 350.2 163.049 351.352 163.049 352.6ZM159.737 352.6C159.737 351.8 159.593 351.056 159.305 350.368C159.033 349.664 158.657 349.056 158.177 348.544C157.697 348.032 157.121 347.632 156.449 347.344C155.793 347.04 155.081 346.888 154.313 346.888C153.593 346.888 152.905 347.024 152.249 347.296C151.593 347.568 151.017 347.96 150.521 348.472C150.025 348.968 149.625 349.568 149.321 350.272C149.033 350.976 148.889 351.752 148.889 352.6C148.889 353.384 149.017 354.128 149.273 354.832C149.545 355.52 149.921 356.12 150.401 356.632C150.881 357.144 151.449 357.552 152.105 357.856C152.777 358.16 153.513 358.312 154.313 358.312C155.033 358.312 155.721 358.176 156.377 357.904C157.033 357.616 157.609 357.224 158.105 356.728C158.601 356.216 158.993 355.616 159.281 354.928C159.585 354.224 159.737 353.448 159.737 352.6Z"
              fill="#090000"
            />
            <path
              d="M168.762 361V344.2H181.362V346.984H171.978V351.28H178.314V353.992H171.978V361H168.762Z"
              fill="#090000"
            />
            <path
              d="M195.107 361V344.2H207.659V346.984H198.323V351.16H204.611V353.872H198.323V358.216H207.755V361H195.107Z"
              fill="#090000"
            />
            <path
              d="M213.542 344.2H216.662L225.158 355.624V344.2H228.182V361H225.326L216.566 349.24L216.59 361H213.542V344.2Z"
              fill="#090000"
            />
            <path
              d="M251.018 352.696C251.018 353.864 250.818 354.968 250.418 356.008C250.018 357.048 249.45 357.96 248.714 358.744C247.978 359.512 247.098 360.128 246.074 360.592C245.066 361.04 243.946 361.264 242.714 361.264C241.498 361.264 240.354 361.048 239.282 360.616C238.226 360.168 237.298 359.56 236.498 358.792C235.698 358.008 235.066 357.088 234.602 356.032C234.138 354.976 233.906 353.832 233.906 352.6C233.906 351.432 234.122 350.328 234.554 349.288C235.002 348.232 235.61 347.312 236.378 346.528C237.162 345.728 238.09 345.096 239.162 344.632C240.234 344.168 241.402 343.936 242.666 343.936C244.026 343.936 245.306 344.208 246.506 344.752C247.722 345.296 248.738 346.048 249.554 347.008C249.186 347.36 248.81 347.712 248.426 348.064C248.058 348.4 247.69 348.736 247.322 349.072C246.746 348.384 246.05 347.848 245.234 347.464C244.434 347.08 243.578 346.888 242.666 346.888C241.898 346.888 241.178 347.032 240.506 347.32C239.85 347.608 239.274 348.008 238.778 348.52C238.298 349.032 237.914 349.64 237.626 350.344C237.354 351.032 237.218 351.784 237.218 352.6C237.218 353.4 237.354 354.152 237.626 354.856C237.898 355.544 238.282 356.152 238.778 356.68C239.274 357.192 239.858 357.6 240.53 357.904C241.202 358.208 241.946 358.36 242.762 358.36C243.37 358.36 243.938 358.272 244.466 358.096C245.01 357.904 245.49 357.64 245.906 357.304C246.338 356.952 246.698 356.536 246.986 356.056C247.29 355.576 247.498 355.048 247.61 354.472H242.618V351.664H251.018V352.696Z"
              fill="#090000"
            />
            <path d="M256.739 361V344.2H259.955V361H256.739Z" fill="#090000" />
            <path
              d="M266.361 344.2H269.481L277.977 355.624V344.2H281.001V361H278.145L269.385 349.24L269.409 361H266.361V344.2Z"
              fill="#090000"
            />
            <path
              d="M287.397 361V344.2H299.949V346.984H290.613V351.16H296.901V353.872H290.613V358.216H300.045V361H287.397Z"
              fill="#090000"
            />
            <path
              d="M305.831 361V344.2H318.383V346.984H309.047V351.16H315.335V353.872H309.047V358.216H318.479V361H305.831Z"
              fill="#090000"
            />
            <path
              d="M324.266 361V344.2H332.186C333.002 344.2 333.753 344.328 334.441 344.584C335.145 344.824 335.746 345.176 336.242 345.64C336.754 346.088 337.153 346.632 337.441 347.272C337.729 347.896 337.874 348.592 337.874 349.36C337.874 350.432 337.57 351.384 336.962 352.216C336.37 353.032 335.578 353.624 334.586 353.992C335.194 355.16 335.802 356.328 336.41 357.496C337.018 358.664 337.626 359.832 338.234 361H334.658C334.098 359.896 333.546 358.808 333.002 357.736C332.474 356.648 331.938 355.552 331.394 354.448H327.482V361H324.266ZM331.898 346.96H327.482V351.832H331.273C331.737 351.832 332.17 351.792 332.57 351.712C332.986 351.632 333.346 351.496 333.65 351.304C333.954 351.112 334.194 350.864 334.37 350.56C334.546 350.24 334.634 349.856 334.634 349.408C334.634 348.672 334.378 348.08 333.866 347.632C333.37 347.184 332.714 346.96 331.898 346.96Z"
              fill="#090000"
            />
            <path d="M343.497 361V344.2H346.713V361H343.497Z" fill="#090000" />
            <path
              d="M353.119 344.2H356.239L364.735 355.624V344.2H367.759V361H364.903L356.143 349.24L356.167 361H353.119V344.2Z"
              fill="#090000"
            />
            <path
              d="M390.595 352.696C390.595 353.864 390.395 354.968 389.995 356.008C389.595 357.048 389.027 357.96 388.291 358.744C387.555 359.512 386.675 360.128 385.651 360.592C384.643 361.04 383.523 361.264 382.291 361.264C381.075 361.264 379.931 361.048 378.859 360.616C377.803 360.168 376.875 359.56 376.075 358.792C375.275 358.008 374.643 357.088 374.179 356.032C373.715 354.976 373.483 353.832 373.483 352.6C373.483 351.432 373.699 350.328 374.131 349.288C374.579 348.232 375.187 347.312 375.955 346.528C376.739 345.728 377.667 345.096 378.739 344.632C379.811 344.168 380.979 343.936 382.243 343.936C383.603 343.936 384.883 344.208 386.083 344.752C387.299 345.296 388.315 346.048 389.131 347.008C388.763 347.36 388.387 347.712 388.003 348.064C387.635 348.4 387.267 348.736 386.899 349.072C386.323 348.384 385.627 347.848 384.811 347.464C384.011 347.08 383.155 346.888 382.243 346.888C381.475 346.888 380.755 347.032 380.083 347.32C379.427 347.608 378.851 348.008 378.355 348.52C377.875 349.032 377.491 349.64 377.203 350.344C376.931 351.032 376.795 351.784 376.795 352.6C376.795 353.4 376.931 354.152 377.203 354.856C377.475 355.544 377.859 356.152 378.355 356.68C378.851 357.192 379.435 357.6 380.107 357.904C380.779 358.208 381.523 358.36 382.339 358.36C382.947 358.36 383.515 358.272 384.043 358.096C384.587 357.904 385.067 357.64 385.483 357.304C385.915 356.952 386.275 356.536 386.563 356.056C386.867 355.576 387.075 355.048 387.187 354.472H382.195V351.664H390.595V352.696Z"
              fill="#090000"
            />
            <path
              d="M412.671 358.288C413.551 358.288 414.375 358.104 415.143 357.736C415.911 357.368 416.583 356.824 417.159 356.104C417.527 356.456 417.879 356.808 418.215 357.16C418.567 357.496 418.919 357.84 419.271 358.192C418.855 358.672 418.391 359.104 417.879 359.488C417.367 359.856 416.815 360.176 416.223 360.448C415.647 360.704 415.047 360.896 414.423 361.024C413.799 361.168 413.175 361.24 412.551 361.24C411.319 361.24 410.167 361.024 409.095 360.592C408.023 360.16 407.087 359.56 406.287 358.792C405.503 358.024 404.879 357.112 404.415 356.056C403.951 355 403.719 353.848 403.719 352.6C403.719 351.416 403.935 350.296 404.367 349.24C404.815 348.184 405.431 347.264 406.215 346.48C407.015 345.696 407.951 345.08 409.023 344.632C410.095 344.168 411.271 343.936 412.551 343.936C413.879 343.936 415.143 344.208 416.343 344.752C417.559 345.296 418.567 346.048 419.367 347.008L417.207 349.168C416.631 348.448 415.935 347.888 415.119 347.488C414.319 347.088 413.463 346.888 412.551 346.888C411.783 346.888 411.063 347.032 410.391 347.32C409.719 347.608 409.135 348.008 408.639 348.52C408.143 349.016 407.751 349.616 407.463 350.32C407.175 351.024 407.031 351.784 407.031 352.6C407.031 353.384 407.167 354.12 407.439 354.808C407.727 355.496 408.119 356.104 408.615 356.632C409.111 357.144 409.703 357.552 410.391 357.856C411.079 358.144 411.839 358.288 412.671 358.288Z"
              fill="#090000"
            />
            <path
              d="M424.7 361V344.2H427.916V351.088H435.932V344.2H439.148V361H435.932V353.992H427.916V361H424.7Z"
              fill="#090000"
            />
            <path
              d="M445.525 361V344.2H458.077V346.984H448.741V351.16H455.029V353.872H448.741V358.216H458.173V361H445.525Z"
              fill="#090000"
            />
            <path
              d="M463.96 344.2H467.08L475.576 355.624V344.2H478.6V361H475.744L466.984 349.24L467.008 361H463.96V344.2Z"
              fill="#090000"
            />
            <path
              d="M501.436 352.696C501.436 353.864 501.236 354.968 500.836 356.008C500.436 357.048 499.868 357.96 499.132 358.744C498.396 359.512 497.516 360.128 496.492 360.592C495.484 361.04 494.364 361.264 493.132 361.264C491.916 361.264 490.772 361.048 489.7 360.616C488.644 360.168 487.716 359.56 486.916 358.792C486.116 358.008 485.484 357.088 485.02 356.032C484.556 354.976 484.324 353.832 484.324 352.6C484.324 351.432 484.54 350.328 484.972 349.288C485.42 348.232 486.028 347.312 486.796 346.528C487.58 345.728 488.508 345.096 489.58 344.632C490.652 344.168 491.82 343.936 493.084 343.936C494.444 343.936 495.724 344.208 496.924 344.752C498.14 345.296 499.156 346.048 499.972 347.008C499.604 347.36 499.228 347.712 498.844 348.064C498.476 348.4 498.108 348.736 497.74 349.072C497.164 348.384 496.468 347.848 495.652 347.464C494.852 347.08 493.996 346.888 493.084 346.888C492.316 346.888 491.596 347.032 490.924 347.32C490.268 347.608 489.692 348.008 489.196 348.52C488.716 349.032 488.332 349.64 488.044 350.344C487.772 351.032 487.636 351.784 487.636 352.6C487.636 353.4 487.772 354.152 488.044 354.856C488.316 355.544 488.7 356.152 489.196 356.68C489.692 357.192 490.276 357.6 490.948 357.904C491.62 358.208 492.364 358.36 493.18 358.36C493.788 358.36 494.356 358.272 494.884 358.096C495.428 357.904 495.908 357.64 496.324 357.304C496.756 356.952 497.116 356.536 497.404 356.056C497.708 355.576 497.916 355.048 498.028 354.472H493.036V351.664H501.436V352.696Z"
              fill="#090000"
            />
            <path
              d="M504.726 361L511.518 344.2H515.238L521.934 361H518.478L516.75 356.464H509.814L508.086 361H504.726ZM510.798 353.896H515.79L513.318 347.32L510.798 353.896Z"
              fill="#090000"
            />
            <path
              d="M526.646 344.2H529.766L538.262 355.624V344.2H541.286V361H538.43L529.67 349.24L529.694 361H526.646V344.2Z"
              fill="#090000"
            />
            <path
              d="M547.682 344.2H550.802L559.298 355.624V344.2H562.322V361H559.466L550.706 349.24L550.73 361H547.682V344.2Z"
              fill="#090000"
            />
            <path
              d="M583.022 353.776C583.022 354.912 582.846 355.936 582.494 356.848C582.158 357.76 581.67 358.544 581.03 359.2C580.39 359.856 579.622 360.36 578.726 360.712C577.83 361.064 576.83 361.24 575.726 361.24C574.622 361.24 573.622 361.072 572.726 360.736C571.83 360.384 571.062 359.888 570.422 359.248C569.798 358.592 569.31 357.808 568.958 356.896C568.622 355.968 568.454 354.928 568.454 353.776V344.2H571.67V353.776C571.67 355.152 572.038 356.248 572.774 357.064C573.51 357.88 574.502 358.288 575.75 358.288C576.358 358.288 576.91 358.184 577.406 357.976C577.902 357.752 578.326 357.448 578.678 357.064C579.046 356.664 579.326 356.184 579.518 355.624C579.71 355.064 579.806 354.448 579.806 353.776V344.2H583.022V353.776Z"
              fill="#090000"
            />
            <path
              d="M589.144 361V344.2H597.064C597.88 344.2 598.632 344.328 599.32 344.584C600.024 344.824 600.624 345.176 601.12 345.64C601.632 346.088 602.032 346.632 602.32 347.272C602.608 347.896 602.753 348.592 602.753 349.36C602.753 350.432 602.448 351.384 601.84 352.216C601.248 353.032 600.456 353.624 599.464 353.992C600.072 355.16 600.68 356.328 601.288 357.496C601.896 358.664 602.504 359.832 603.112 361H599.536C598.976 359.896 598.424 358.808 597.88 357.736C597.352 356.648 596.816 355.552 596.272 354.448H592.36V361H589.144ZM596.776 346.96H592.36V351.832H596.152C596.616 351.832 597.048 351.792 597.448 351.712C597.864 351.632 598.225 351.496 598.529 351.304C598.833 351.112 599.072 350.864 599.248 350.56C599.424 350.24 599.512 349.856 599.512 349.408C599.512 348.672 599.257 348.08 598.745 347.632C598.249 347.184 597.592 346.96 596.776 346.96Z"
              fill="#090000"
            />
          </svg>
        </Link>
      </div>
      <nav ref={navRef}>
        <Link href="/">Home</Link> 
        <Link href="/#vision">Our Vision</Link>
        <Link href="/Events"> Events</Link>
        <Link href="/#achievements"> Achievements</Link>
        {/* <Link href="/Execom">Execom</Link> */}
        <Link href="/#About"> About</Link>
        <Link href="/#team"> Team</Link>
        <Link href="/#Testimonials"> Testimonials</Link>
        <button class="text-sm text-white bg-black rounded-md px-6 py-2 transition hover:bg-transparent hover:text-black hover:ring-2 hover:ring-black cursor-pointer">
          JoinUs
        </button>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes className="icons times" />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars className="icons bars" />
      </button>
    </header>
  )
}

export default Navbar
