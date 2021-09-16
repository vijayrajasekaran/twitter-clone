import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import WriteTweet from '../src/components/WriteTweet'
import Tweet from '../src/components/Tweet'
import {
  SparklesIcon,
  SearchIcon,
  HomeIcon,
  BellIcon,
  MailIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon
} from '@heroicons/react/outline'

const Dashboard = () => {
  return (
    <div>
      <div className = 'p-4 bg-black text-white flex min-h-screen'>
        <div className = 'space-y-7 pr-3 w-14 flex flex-col items-center border-r-2 border-gray-800'>
          <button>
            <FontAwesomeIcon className = 'text-gray-300' icon = { faTwitter } size = '2x' />
          </button>
          <button>
            <HomeIcon className = 'w-7 h-7 text-gray-300' />
          </button>
          <button>
            <SearchIcon className = 'w-7 h-7 text-gray-300' />
          </button>
          <button>
            <BellIcon className = 'w-7 h-7 text-gray-300' />
          </button>
          <button>
          <MailIcon className = 'w-7 h-7 text-gray-300' />
          </button>
          <button>
            <BookmarkIcon className = 'w-7 h-7 text-gray-300' />
          </button>
          <button>
            <ClipboardListIcon className = 'w-7 h-7 text-gray-300' />
          </button>
          <button>
            <UserIcon className = 'w-7 h-7 text-gray-300' />
          </button>
          <button>
            <DotsCircleHorizontalIcon className = 'w-8 h-8 text-gray-300' />
          </button>
        </div>
        <div className = 'w-full flex flex-col'>
          <div className = 'pl-6 pb-2 flex justify-between border-b-2 border-gray-800'>
            <span className = 'text-gray-200 font-bold text-xl'>Home</span>
            <span>
              <SparklesIcon className = 'w-6 h-6 text-gray-300' />
            </span>
          </div>
          <span className = 'text-gray-200 font-bold text-xl p-4'><WriteTweet /></span>
          <div className = 'text-gray-200 text-xl px-6'>
            {
              [...Array(10)].map((element, index) => <Tweet key={index} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
