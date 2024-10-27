import React from 'react'

const imgUrl =
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1096,h=1088,fit=crop/A3QwE8Bn7OHwxJZX/community-YNqyqJgDvgURn4qG.jpg'

const SniffitCommunitySection = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-full px-48 items-center justify-center py-14'>
      {/* Left Side - Text */}
      <div className='flex flex-col justify-center items-start w-full md:w-1/2 p-8'>
        <h2 className='text-6xl  mb-4'>
          Connecting Dog <br />
          Lovers Everywhere
        </h2>
        <p className='text-base mb-6'>
          Welcome to Sniffit, your ultimate dog matchmaking app, where
          passionate dog owners find perfect breeding matches, adopt various
          breeds, and share their love for dogs in a vibrant community.
        </p>
        <button className='px-14 py-3 w-max border border-black text-black rounded-full font-semibold hover:bg-gray-100'>
          Explore
        </button>
      </div>

      {/* Right Side - Image with Floating Box */}
      <div className='relative w-full md:w-1/2 flex justify-center items-center'>
        <img
          src={imgUrl}
          alt='Community'
          className='w-2/3 object-cover rounded-lg shadow-lg'
        />

        {/* Orange Box Overlay */}
        <div className='absolute bottom-4 flex left-4 bg-[#d87738] items-center justify-evenly    text-white px-4 py-20 rounded-sm text-center w-2/3 h-1/4 gap-6'>
          <div className='flex flex-col items-start justify-between h-[60px] gap-1'>
            <div className='text-4xl font-bold'>150+</div>
            <div>Join Us</div>
          </div>
          <div className='flex flex-col items-start justify-between h-[60px] gap-1'>
            <div className='text-4xl font-bold '>15</div>
            <div>Trusted by Owners</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SniffitCommunitySection
