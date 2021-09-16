import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { PhotographIcon, EmojiHappyIcon, FilmIcon } from '@heroicons/react/outline'

const WriteTweet = () => {
  return (
    <div>
      <div className = 'pb-3 border-b-2 border-gray-800 space-x-3 flex'>
        <div className = 'w-14'>
          <Image src = '/images/user-avatar.png' width = '64' height = '64' />
        </div>
        <div>
          <div className = 'py-2 w-full border-b-2 border-gray-800'>
            <textarea className = 'resize-y overflow-hidden w-full outline-none bg-black placeholder-gray-500' type = 'textarea' placeholder = "What's happening?" />
            <FontAwesomeIcon className = 'text-blue-500' icon = { faGlobeAmericas } size = 'xs' />
            <span className = 'pl-2 text-blue-500 text-sm'>Everyone can reply</span>
          </div>
          <div className = 'pt-4 flex justify-between'>
            <div className = 'space-x-2 flex'>
              <PhotographIcon className = 'w-6 h-6 text-blue-500' />
              <FilmIcon className = 'w-6 h-6 text-blue-500' />
              <EmojiHappyIcon className = 'w-6 h-6 text-blue-500' />
            </div>
            <button className = 'bg-blue-500 px-4 py-1 text-base font-bold rounded-2xl'>
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WriteTweet
