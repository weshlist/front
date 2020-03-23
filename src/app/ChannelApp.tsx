import React from 'react';
import ChannelJoinTemplate from '../component/channel/join/ChannelJoinTemplate'
import ChannelJoinFormComponent from '../component/channel/join/ChannelJoinForm';
import { useChannel } from '../context/ChannelContext';
import ChannelListTemplate from '../component/channel/list/ChannelListTemplate';


const ChannelDashboardApp = () => {
  const {data, joinChannel} = useChannel()

  return (
    <div>
      {data === undefined ? 
         <ChannelJoinTemplate form={<ChannelJoinFormComponent onJoinClick={joinChannel}/>}/> :
         <ChannelListTemplate roomId={data.channelId} roomName={data.channelName} streamUrl={data.streamUrl}/>
      }
    </div>
  )
}

export default ChannelDashboardApp;
