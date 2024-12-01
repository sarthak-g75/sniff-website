import React from 'react'
import WisdomCard from '../components/WisdomCard'
const Tips = () => {
  const wisdomData = [
    {
      image:
        'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxNXx8ZG9nJTIwbWF0Y2htYWtpbmd8ZW58MHx8fHwxNzI3ODY1NDMyfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=264', // Replace with your image link
      title: 'Adoption Tips',
      description:
        'Explore essential tips for caring for your dog and ensuring their happiness.',
      path: '/adoption-tips',
    },
    {
      image:
        'https://images.unsplash.com/photo-1516366434321-728a48e6b7bf?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyNHx8ZG9nJTIwbWF0Y2htYWtpbmd8ZW58MHx8fHwxNzI3ODY1NDMyfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=264', // Replace with your image link
      title: 'Breeding Tips',
      description:
        "Get expert tips on responsible dog breeding, from mate selection to post-pregnancy care, ensuring your dog's health and wellbeing at every step.",
      path: '/breeding-tips',
    },
  ]
  return (
    <section className='flex items-center justify-center w-full py-10 lg:py-20'>
      <div className='flex flex-col items-center gap-10 text-center lg:text-left'>
        <h1 className='text-3xl font-bold lg:text-5xl text-blackPrimary '>
          Woooff Wisdom
        </h1>
        <div className='flex flex-col gap-10'>
          {wisdomData.map((item, index) => (
            <WisdomCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              path={item.path}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tips
