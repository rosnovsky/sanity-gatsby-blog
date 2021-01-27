import { useFetchUser } from '../../utils/user'
import Link from 'next/link'

const Intro = () => {
  const { user, loading } = useFetchUser()
  return (
    <>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Rosnovsky Park
        </h1>
        <h2 className="text-center md:text-left text-lg mt-5 md:pl-8">
          {user && !loading ? (
            <>
              <Link href="/api/logout">
                <a>Logout</a>
              </Link>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
            </>
          ) : null}
          {!user && !loading ? (
            <Link href="/api/login">
              <a>Login</a>
            </Link>
          ) : null}
        </h2>
      </section>
    </>
  )
}

export default Intro
