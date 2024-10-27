import React from 'react'

const imgUrl =
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1096,h=1088,fit=crop/A3QwE8Bn7OHwxJZX/community-YNqyqJgDvgURn4qG.jpg'

const SniffitCommunitySection = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-full px-24 items-center justify-center py-14'>
      {/* Left Side - Text */}
      <div className='flex flex-col justify-center items-start w-full md:w-1/2 p-8'>
        <h2 className='text-4xl font-bold mb-4'>
          Connecting Dog Lovers Everywhere
        </h2>
        <p className='text-lg mb-6'>
          Welcome to Sniffit, your ultimate dog matchmaking app, where
          passionate dog owners find perfect breeding matches, adopt various
          breeds, and share their love for dogs in a vibrant community.
        </p>
        <button className='px-6 py-3 border border-black text-black rounded-lg font-semibold hover:bg-gray-100'>
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
        <div className='absolute bottom-4 left-4 bg-orange-500 text-white px-4 py-3 rounded-md text-center'>
          <div className='text-3xl font-bold'>150+</div>
          <div>Join Us</div>
          <div className='text-3xl font-bold mt-2'>15</div>
          <div>Trusted by Owners</div>
        </div>
      </div>
    </div>
  )
}

export default SniffitCommunitySection
