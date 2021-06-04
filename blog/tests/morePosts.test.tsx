import { render, screen } from '@testing-library/react'
import { BlogPost } from '..'
import MorePosts from '../components/Posts/MorePosts'

jest.mock('next/dynamic', () => {
  return jest.fn(() => 'Dynamic')
})

jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} />
))

const post: BlogPost = {
  _id: '1',
  title: 'Test',
  socialCard: {
    title: 'Test',
    subtitle: 'Test',
  },
  slug: {
    current: 'test',
  },
  categories: [
    {
      title: 'Test',
      slug: {
        current: 'Test',
      },
    },
  ],
  publishedAt: '2017-01-01',
  excerpt: [
    {
      _key: 'ce58b5efaeb9',
      _type: 'block',
      style: '',
      children: [],
      markDefs: [],
    },
  ],
  featured: false,
  mainImage: {
    alt: 'DDD',
    caption: 'DDD',
    asset: {
      metadata: {
        _type: 'sanity.imageMetadata',
        dimensions: {
          _type: 'sanity.imageDimensions',
          aspectRatio: 0.75,
          width: 1000,
          height: 2000,
        },
        isOpaque: false,
        hasAlpha: false,
        lqip: 'data',
      },
      url: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg',
    },
  },
}

describe('More Posts', () => {
  it('renders without crashing', () => {
    render(<MorePosts posts={[post]} />)
    expect(
      screen.getByRole('img', { name: 'Cover Image for Test' })
    ).toBeInTheDocument()
  })
})