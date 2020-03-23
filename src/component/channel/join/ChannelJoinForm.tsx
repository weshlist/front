import React, { Component, ChangeEvent } from 'react';
import './ChannelJoinForm.css';

interface Props {
  onJoinClick: (channelName: string) => void
}

interface States {
  channelName: string
}
export class ChannelJoinFormComponent extends Component<Props, States> {
  constructor(props: Props) {
    super(props)
    console.log("hoho")

    this.state = {
      channelName: '',
    }
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      channelName: e.target.value
    })
  }

  handleSubmit = () => {
    this.props.onJoinClick(this.state.channelName)
  }

  render() {
    return (
      <div className="form">
        <input
          value={this.state.channelName}
          onChange={this.handleChange}
          placeholder="Room Name" />
        <button className="join-button" onClick={this.handleSubmit}>
          Join
        </button>
      </div>
    );
  }
  
};

export default ChannelJoinFormComponent;