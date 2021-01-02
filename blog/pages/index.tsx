import Container from '../components/Layout/container'
import MoreStories from '../components/Posts/MorePosts'
import HeroPost from '../components/Posts/HeroPost'
import Intro from '../components/Header/intro'
import Layout from '../components/Layout/layout'
import Head from 'next/head'
import { request } from 'graphql-request'

const Index = ({ posts, menuItems, alert }: any) => {
  const featuredPost = posts.filter((post: any) => post.featured === true)
  const notFeaturedPosts = posts.filter((post: any) => post.featured !== true)

  const randomFeaturedPost = featuredPost && featuredPost[0]
  return (
    <>
      <Layout menuItems={menuItems} alert={alert}>
        <Head>
          <title>Rosnovsky Park</title>
          <link
            rel="preload"
            href="https://api.covidtracking.com/v1/us/current.json"
            as="fetch"
            crossOrigin="anonymous"
          />
        </Head>
        <Container>
          <Intro />
          {featuredPost && (
            <HeroPost
              title={randomFeaturedPost.title}
              mainImage={randomFeaturedPost.mainImage}
              date={randomFeaturedPost.publishedAt}
              slug={randomFeaturedPost.slug.current}
              excerpt={randomFeaturedPost.excerpt}
              categories={randomFeaturedPost.categories}
            />
          )}
          <MoreStories posts={notFeaturedPosts} />
        </Container>
      </Layout>
    </>
  )
}

export default Index

export async function getStaticProps({ preview = false }) {
  const data = await request(
    'https://n3o7a5dl.api.sanity.io/v1/graphql/production/default',
    `{
      alert: allAlert {
        message
        alertLink
        internal
        active
      }
      menuItems: allPage(where: {menuItem: {eq: true}}){
        title
        slug {
          current
        }
      }
      posts: allPost(sort: [ { publishedAt: DESC } ]){
      _id
      title
      body: bodyRaw
      slug {
        current
      }
      categories {
        title
        slug {
          current
        }
      }
      publishedAt
      excerpt: excerptRaw
      featured
      mainImage {
        alt
        caption
        asset {
          metadata{
            dimensions {
              aspectRatio
              width
              height
            }
            lqip
          }
          url
        }
      }
    }
  }`
  )
  return {
    props: {
      preview,
      posts: data.posts,
      menuItems: data.menuItems,
      alert: data.alert[0],
    },
  }
}
