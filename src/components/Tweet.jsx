import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons'
import { faRetweet, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

const Tweet = () => {
  return (
    <div>
      <div className = 'mb-4 pb-3 border-b-2 border-gray-800 space-x-3 flex'>
        <div className = 'w-14'>
          <Image src = '/images/user-avatar.png' width = '64' height = '64' />
        </div>
        <div className = 'space-y-1 flex flex-col w-full'>
          <div className = 'flex justify-between'>
            <div className = 'space-x-1'>
              <span className = 'text-base text-gray-300 text-bold'>John Doe</span>
              <span className = 'text-gray-500 text-sm'>@johndoe</span>
            </div>
            <span>
              <FontAwesomeIcon className = 'text-gray-500' icon = { faEllipsisH } size = 'xs' />
            </span>
          </div>
          <div className = 'pb-2 text-gray-300 text-sm'>Hello world!</div>
          <div className = 'flex justify-between'>
            <FontAwesomeIcon className = 'text-gray-500' icon = { faComment } size = 'sm' />
            <FontAwesomeIcon className = 'text-gray-500' icon = { faRetweet } size = 'sm' />
            <FontAwesomeIcon className = 'text-gray-500' icon = { faHeart } size = 'sm' />
            <FontAwesomeIcon className = 'text-gray-500' icon = { faShareSquare } size = 'sm' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet
