import React from 'react'
import Hls from 'hls.js'
import { Layout } from 'antd'
import { HlsPlayer } from '../player/HlsPlayer'
// import Hls from 'hls.js'

interface Props {
  roomId: string,
  roomName: string,
  streamUrl: string
}

const ChannelListTemplate: React.FC<Props> = (props: Props) => {
  return (
      <Layout>
        roomId: {props.roomId} <br/> 
        roomName: {props.roomName}
        {Hls.isSupported ? 
          <HlsPlayer streamingUrl={props.streamUrl}/> : <div> HLS is not supported </div>}
      </Layout>
  )
}

export  default ChannelListTemplate