import { format } from 'date-fns'
import MainImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'
// @ts-expect-error
import PortableText from '@sanity/block-content-to-react'
import serializers from '../lib/serializers'

type Props = {
  title: string
  mainImage: string
  date: string
  excerpt: Record<any, any>[]
  author: Author
  slug: string
  categories: Record<any, any>[]
  preview: boolean
}

const PostPreview = ({
  title,
  mainImage,
  date,
  excerpt,
  categories,
  slug,
}: Props) => {
  const postUrl = `${format(Date.parse(date), 'yyyy/MM/dd')}`
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return (
    <div className="mx-5 my-10">
      <div className="mb-5">
        <MainImage
          preview={true}
          slug={`${postUrl}/${slug}`}
          title={title}
          src={mainImage}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/blog/${postUrl}/${slug}`} href="/blog/[slug]">
          <a className="hover:underline text-3xl font-black">{title}</a>
        </Link>
      </h3>
      <div className="text-sm mb-4 font-mono text-gray-700">
        {new Intl.DateTimeFormat('en-US', options).format(Date.parse(date))} |{' '}
        <span className="text-yellow-600">
          {categories.map((category) => category.title + ' | ')}
        </span>
      </div>
      <p className="text-xl font-proper leading-relaxed mb-4">
        <PortableText blocks={excerpt} serializers={serializers} />
      </p>
    </div>
  )
}

export default PostPreview
