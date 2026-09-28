import heroScene from '../assets/hero.png'
import mailIcon from '../assets/mail.svg'

function Hero() {
  return (
    // sets up scroll links
    <section
      id="home"
      className="flex flex-col items-center px-5 pb-10 pt-6 text-center sm:px-10"
    >
      {/* w-full lets it shrink on small screens; max-w keeps it from growing too big */}
      <img
        src={heroScene}
        alt="A white bunny sitting under a crescent moon and twinkling stars"
        className="w-full max-w-4xl"
      />

      {/* using tail wind to give text a soft white glow */}
      <h1 className="mt-3 text-3xl font-medium tracking-wide [text-shadow:0_0_14px_rgb(255_255_255/0.55)] sm:text-5xl">
        Hello, world
      </h1>

      <p className="mt-2 text-base sm:text-xl">
        Aspiring software engineer and fantasy writer.
      </p>

      <a
        href="mailto:kassie.flores99@gmail.com" 
        aria-label="Email me"
        className="mt-3 transition-opacity hover:opacity-70 focus-visible:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        <img src={mailIcon} alt="" className="w-12 sm:w-14" />
      </a>
    </section>
  )
}

export default Hero