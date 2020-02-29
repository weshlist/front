import React, { useState } from 'react';
import './ChannelJoinForm.css';

interface Props {
  onJoinClick: (roomName: string) => void
}

const ChannelJoinFormComponent: React.FC<Props> = (props: Props) => {
  const [roomName, setRoomName] = useState()

  const handleSubmit = () => {
    props.onJoinClick(roomName)
  }
  return (
    <div className="form">
      <input
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        placeholder="Room Name" />
      <button className="join-button" onClick={handleSubmit}>
        Join
      </button>
    </div>
  );
};

export default ChannelJoinFormComponent;