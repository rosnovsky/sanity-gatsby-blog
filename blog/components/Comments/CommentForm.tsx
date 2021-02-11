import { useState } from 'react'
import DOMPurify from 'dompurify'
import Link from 'next/link'
import { BlogPost } from '../..'

const CommentForm = ({
  postId,
  user,
}: {
  user: any
  postId: BlogPost['_id']
}) => {
  // const { user, loading } = useFetchUser()
  const [comment, setComment] = useState('')
  const [posting, setPosting] = useState(false)

  const updateComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = JSON.stringify(event.target.value)
    localStorage.setItem('post', value)
    setComment(event.target.value)
  }

  const postComment = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!comment) return
    const cleanComment = DOMPurify.sanitize(comment)

    setPosting(true)

    const commentMetadata = {
      timestamp: Date.now(),
      postId: postId,
    }

    const author = {
      id: user.sub,
    }

    const commentObject = {
      meta: commentMetadata,
      author,
      content: cleanComment,
    }

    const commentPosting = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify(commentObject),
    })
      .then((result) => result.json())
      .then((status) => {
        console.info(status)
      })
    localStorage.setItem('post', '')
    setComment('')
    setPosting(false)
    return commentPosting
  }

  return (
    <div className="w-full mx-auto">
      <div className="pt-6 px-4 pb-4 sm:px-6 lg:col-span-3 lg:pt-6  xl:pl-12">
        <div className="max-w-full mx-auto lg:max-w-none">
          <div className="">
            <label htmlFor="message" className="sr-only">
              Comment form
            </label>
            <form>
              <textarea
                disabled={posting}
                onChange={updateComment}
                id="message"
                name="message"
                rows={4}
                className="block w-full shadow-lg py-3 px-4 placeholder-gray-500 ring-red-500 border-gray-300 rounded-lg border-2"
                placeholder={
                  !posting
                    ? `What's on your mind${
                        user ? ', ' + user.nickname + '?' : '?'
                      }`
                    : 'Posting...'
                }
              ></textarea>
              <div className="flex justify-end py-6">
                {user && (
                  <>
                    <button
                      onClick={postComment}
                      type="submit"
                      disabled={posting}
                      className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
                    >
                      Post Comment
                    </button>
                    <Link href="/api/auth/logout">
                      <a>Logout</a>
                    </Link>
                    <Link href="/api/auth/me">
                      <a>Profile</a>
                    </Link>
                  </>
                )}
                {!user && (
                  <div className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md bg-green-200 hover:bg-green-800 hover:text-green-200 text-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer transition duration-300">
                    <Link href="/api/auth/login">
                      <span className="no-underline font-mono ">
                        Login and post
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentForm
