import { Link } from 'gatsby'
import React from 'react'
import BlogPostPreview from '../Post/blogpostcard'
import Covid from '../Covid/Covid'

// import styles from './blog-post-preview-list.module.css'

function BlogPostPreviewGrid(props) {
  return (
    <>
      <div>
        <Covid />
      </div>
      <div className="relative max-w-5xl mx-auto">
        {props.title && (
          <h2 className="mt-10 mb-15 font-semibold text-center text-4xl">
            {props.title}
          </h2>
        )}
        <div className="mt-12 grid gap-5 max-w-lg mx-auto xl:grid-cols-2 xl:max-w-none lg:grid-cols-2 lg:max-w-none lg:mx-5 xl:gap-10">
          {props.nodes &&
            props.nodes.map(node => (
              <div className="h-full" key={node.id}>
                <BlogPostPreview {...node} isInList />
              </div>
            ))}
        </div>
        {props.browseMoreHref && (
          <div className="text-center mt-10 text-xl">
            <Link to={props.browseMoreHref}>Browse more</Link>
          </div>
        )}
      </div>
    </>
  )
}

export default BlogPostPreviewGrid