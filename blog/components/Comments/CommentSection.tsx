import CommentForm from './CommentForm'
import Comments from './Comments'
import { useFetchUser } from '../../utils/user'
import { PostComment } from '../..'

const CommentSection = ({
  comments,
  postId,
}: {
  comments: PostComment[]
  postId: string
}) => {
  const { user, loading } = useFetchUser()
  return (
    <div className="mx-auto prose xl:prose-3xl lg:prose-2xl md:prose-2xl sm:prose-2xl xs:prose-2xl prose-xl">
      <h3 className="text-center">Comments</h3>
      <div className="flex flex-col w-full">
        <CommentForm user={user} postId={postId} />
        <Comments comments={comments} />
      </div>
    </div>
  )
}

export default CommentSection
