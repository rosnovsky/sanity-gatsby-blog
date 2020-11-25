import React, { useState, useEffect } from 'react'
import Figure from './figure'
// import getYouTubeId from 'get-youtube-id'
// import YouTube from 'react-youtube'
import ReactPlayer from 'react-player/file'
import Youtube from 'react-player/youtube'
import sanityClient from '@sanity/client'
import sanityConfig from '../../../client-config'
import Code from './code'

const client = sanityClient({ ...sanityConfig.sanity, useCdn: true })

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    code: Code,

    // Youtube component could be replaced with ReactPlayer, removing 2 dependencies (YouTube and getYoutubeId)
    youtube: ({ node }) => {
      const { url } = node
      // const id = getYouTubeId(url)
      return (
        <div className="w-full">
          <Youtube url={url} 
          className="youtubeContainer"
          autoplay={false}
          pip={true}
          width={'100%'} 
          />
          {/* <YouTube containerClassName={'youtubeContainer'} videoId={id} /> */}
        </div>
      )
    },
    mux: props => {
      // TODO: Fix this bullshit
      const [asset, setAsset] = useState()

      const query = `*[_type == "post" && body[]._type =="mux" ]{
        "asset": *[asset._id == "${props.node.asset._ref}"]{...}
      }`

      useEffect(() => {
        client
          .fetch(query)
          .then(video => setAsset(video[0].asset[0].playbackId))
      }, [])

      return (
        <ReactPlayer
          url={`https://stream.mux.com/${asset}.m3u8`}
          autoplay={false}
          pip={true}
          width={'100%'}
          // height={'auto'}
        />
      )
    }
  }
}

export default serializers
