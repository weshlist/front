import React, { Component, RefObject } from 'react'
import Hls, { Events } from 'hls.js'

import { Layout } from 'antd'

interface Props {
  streamingUrl: string
}

export class HlsPlayer extends Component<Props> {
  video: RefObject<HTMLVideoElement>
  playButton: RefObject<HTMLButtonElement>

  constructor(props: Props) {
    super(props)
    this.video = React.createRef()
    this.playButton = React.createRef()
  }

  playVideo() {
    this.video.current?.play()
  }

  componentDidMount() {
    const video = this.video.current

    if (!video) {
      console.error("cannot load video element")
      return
    }

    const hls = new Hls({
      autoStartLoad: true,
			debug: true,
			enableWorker: true,
    })

    console.log(this.props.streamingUrl)
    hls.loadSource(this.props.streamingUrl)
    hls.attachMedia(video)

    hls.on(Events.MEDIA_ATTACHED, (event, data) => {
      console.log("attaced media, source " + data.mediaSource)
      video.play()
      hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
          console.log("manifest loaded, found " + data.levels.length + " quality level");
        });
    })    

  }

  render() {
    return (
        <Layout>
          <button ref={this.playButton} disabled onClick={this.playVideo}>Play</button>
          <video ref={this.video}/>
        </Layout>
    )
  }
}