import React from 'react';
import ChannelJoinTemplate from '../component/channel/join/ChannelJoinTemplate'
import ChannelJoinFormComponent from '../component/channel/join/ChannelJoinForm';
import { useChannel } from '../context/ChannelContext';


const ChannelDashboardApp = () => {
  const {data, joinChannel} = useChannel()

  if (data === undefined) {
    return (
      <ChannelJoinTemplate form={<ChannelJoinFormComponent onJoinClick={joinChannel}/>}/>
    );
  } else {
    return (
      <div> 
        roomId: {data.roomId} <br/> 
        roomName: {data.roomName}
      </div>
    )
  }
}

export default ChannelDashboardApp;
