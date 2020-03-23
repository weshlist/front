import React, { ReactNode } from 'react';
import './ChannelJoinTemplate.css'

interface Props {
  form: ReactNode
}

const ChannelJoinTemplate: React.FC<Props> = (props : Props) => {
  return (
    <main className="channel-join-template">
      <div className="title">
        들어가고픈 채널
      </div>
      <section className="form-wrapper">
        {props.form}
      </section>
    </main>
  )
}

export default ChannelJoinTemplate
