import React, { ReactNode } from 'react';
import './ChannelJoinTemplate.css'

interface ChannelJoinTemplateProps {
  form: ReactNode
}

const ChannelJoinTemplate = ({form} : ChannelJoinTemplateProps) => {
  return (
    <main className="channel-join-template">
      <div className="title">
        들어가고픈 채널
      </div>
      <section className="form-wrapper">
        {form}
      </section>
    </main>
  )
}

export default ChannelJoinTemplate
