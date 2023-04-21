import LinkedIn from '../assets/linkedin.png'
import Twitter from '../assets/twitter.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'

const SocialMediaIcons = () => {
  return (
    <div className='flex just md:justify-start my-10 gap-7'>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.linkedin.com'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='linked-in' src={LinkedIn} />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.twitter.com'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='twitter' src={Twitter} />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.facebook.com'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='facebook' src={Facebook} />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.instagram.com'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='instagram' src={Instagram} />
      </a>
    </div>
  )
}

export default SocialMediaIcons
