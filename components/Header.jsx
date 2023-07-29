import Link from "next/link"

const Header = () => {
  return (
    <div class="flex flex-col justify-center items-center md:items-start tracking-wider h-full">
      <div data-aos="fade-in">
        <h1 class=" text-6xl md:text-5xl font-['Krona_One'] tracking-tighter mb-6 -ml-1">
          IEDC CEC
        </h1>
        <h3 class="text-md md:text-xl mb-6">
          Innovation And Entrepreneurship <br />
          Development Cell Bootcamp CEC
        </h3>
        <Link href="#announcement">
          <button
            id="blogs"
            class="bg-black mt-2 text-sm md:text-base text-white px-8 py-[10px] 
        rounded-md hover:scale-110 transition"
          >
            See What's New!
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Header