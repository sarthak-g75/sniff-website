import { Link } from 'react-router-dom'
const WisdomCard = ({ image, title, description, path }) => {
  return (
    <div className='flex flex-col p-6 bg-white rounded-lg md:flex-row '>
      <img
        src={image}
        alt={title}
        className='object-cover h-64 rounded-xl w-96'
      />
      <div className='flex flex-col items-start gap-4 mt-4 lg:p-4 lg:mt-0 lg:justify-center justify-normal lg:w-2/3'>
        <div className='flex flex-col items-start'>
          <h2 className='text-2xl font-bold lg:text-3xl'>{title}</h2>
          <p className='text-justify text-gray-600 '>{description}</p>
        </div>
        <div className='flex lg:justify-end'>
          <Link
            to={path}
            className='px-4 py-2 text-white bg-orange-500 rounded-full w-max hover:bg-orange-600'
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WisdomCard
