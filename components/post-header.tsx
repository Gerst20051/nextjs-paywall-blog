import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import { SHIELD_IMAGE } from '../lib/constants'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  premium: boolean
  author: Author
}

const PostHeader = ({ title, coverImage, date, premium, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12" style={{ alignItems: 'center', display: 'flex' }}>
        {premium && <img src={SHIELD_IMAGE} className="w-12 h-12 mr-4" alt="Premium Post" style={{ float: 'left' }} />}
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
