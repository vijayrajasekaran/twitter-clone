import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faApple } from '@fortawesome/free-brands-svg-icons'

const Login = () => {
  return (
    <div className = 'text-white bg-black min-h-screen'>
      <div className = 'flex flex-col lg:flex-row'>

        {/* #1 - Image as Column */}
        <div className = 'lg:flex lg:w-3/4 hidden md:w-1/2 relative'>
          <Image width="500" layout = 'fill' src = '/images/twitter_login.png' className = 'absolute inset-0'></Image>
          <div className = 'absolute inset-0 z-10 flex justify-center items-center'>
            <FontAwesomeIcon icon = { faTwitter } size = '10x' />
          </div>
        </div>

        {/* #2 - Content */}
        <div className = 'sm:w-2/3'>
          <div className = 'text-gray-300 sm:space-y-14 space-y-12 pl-10 pt-10 flex flex-col'>
            <FontAwesomeIcon icon = { faTwitter } size = '3x' />
            <span className = 'sm:text-7xl text-5xl font-bold'>Happening now</span>
            <span className = 'sm:text-3xl text-2xl font-bold'>Join Twitter today.</span>
          </div>
          <div className = 'px-8 pt-4 sm:space-y-6 space-y-4 flex flex-col justify-center'>
            <Link href = '/home'>
              <button className = 'hover:bg-gray-300 text-bold space-x-2 sm:w-96 w-96 h-12 rounded-3xl bg-gray-100 flex justify-center items-center'>
                <Image src = '/logos/google.png' width = '20' height = '20' />
                <span className = 'text-md font-bold text-gray-800'>Sign up with Google</span>
              </button>
            </Link>
            <Link href = '/home'>
              <button className = 'hover:bg-gray-300 text-bold space-x-2 sm:w-96 w-96 h-12 rounded-3xl bg-gray-100 flex justify-center items-center'>
                <FontAwesomeIcon className = 'text-black' icon = { faApple } size = '2x' />
                <span className = 'text-md font-bold text-gray-800'>Sign up with Apple</span>
              </button>
            </Link>
            <Link href = '/home'>
              <button className = 'hover:bg-gray-300 text-bold space-x-2 sm:w-96 w-96 h-12 rounded-3xl bg-gray-100 flex justify-center items-center'>
                <span className = 'text-md font-bold text-gray-800'>Sign up with phone or email</span>
              </button>
            </Link>
          </div>
          <div className = 'space-y-4 py-6 px-8 flex flex-col'>
            <span className = 'text-gray-500 text-sm'>
              By signing up, you agree to the <Link href = '#'><a className = 'hover:underline text-blue-500'>Terms of Service</a>
              </Link> and <Link href = '#'><a className = 'hover:underline text-blue-500'>Privacy Policy</a></Link>
              , including <Link href = '#'><a className = 'hover:underline text-blue-500'>Cookie Use</a></Link>.
            </span>
            <span className = 'text-bold'>
              Already have an account? <Link href = '/home'><a className = 'hover:underline text-blue-500'>Log in</a></Link>
            </span>
          </div>
        </div>

        {/* #3 - Image as Row */}
        <div className = 'lg:hidden w-full h-96 relative'>
          <Image layout = 'fill' src = '/images/twitter_login.png' className = 'absolute inset-0'></Image>
          <div className = 'absolute inset-0 z-10 flex justify-center items-center'>
            <FontAwesomeIcon icon = { faTwitter } size = '10x' />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className = 'mx-8 py-3 space-x-4 text-xs text-gray-500 flex justify-center items-center'>
          <span className = 'hover:underline'><Link href = '#'><a>About</a></Link></span>
          <span className = 'hover:underline'><Link href = '#'><a>Help Center</a></Link></span>
          <span className = 'hover:underline'><Link href = '#'><a>Terms of Service</a></Link></span>
          <span className = 'hover:underline'><Link href = '#'><a>Privacy Policy</a></Link></span>
          <span className = 'hover:underline'><Link href = '#'><a>Cookie Policy</a></Link></span>
        </div>
        <div className = 'pb-3 text-sm text-gray-500 flex justify-center items-center'>
          <span>2021 Twitter Clone</span>
        </div>
      </footer>
      {/* <style jsx>{`
      .btn {
        @apply space-x-2 w-80 h-12 rounded-3xl bg-gray-100
      }
    `}</style> */}
    </div>
  )
}

export default Login
