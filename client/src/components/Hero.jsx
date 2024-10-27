import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-[70vh] w-full overflow-hidden'>
      {/* Video Background */}
      <video
        className='absolute top-0 left-0 w-full h-full object-cover brightness-50'
        src='/hero.mp4' // Replace with your video path
        autoPlay
        loop
        muted
      />

      {/* Text Overlay */}
      <div className='absolute inset-0 flex flex-col w-full items-center justify-center gap-8 text-white'>
        <h1 className='text-4xl md:text-6xl font-bold text-white text-center'>
          Find Your Perfect Dog <br /> Match Today
        </h1>
        <p className='text-lg md:text-2xl  text-center w-full font-medium'>
          Join our community for dog care tips and successful <br /> matchmaking
          stories.
        </p>
        <button className='bg-[#d87738] w-max px-6 py-2 font-semibold text-lg rounded-full '>
          Get early access
        </button>
      </div>
    </div>
  )
}

export default Hero
