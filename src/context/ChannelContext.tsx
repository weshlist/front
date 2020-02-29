import React, { createContext, useState, useEffect, useContext } from "react";

const LOCAL_STORAGE_KEY = '__channel_data__'

export class ChannelData {
  constructor(
    public roomId: string,
    public roomName: string, 
  ) { }
  
  // static load(): ChannelData | undefined {
  //   const loaded = window.localStorage.getItem(LOCAL_STORAGE_KEY)
  //   if (!loaded) {
  //     return undefined
  //   }

  //   return new ChannelData(loaded)
  // }

  // persist() {
  //   window.localStorage.setItem(LOCAL_STORAGE_KEY, `${this.roomId}`)
  // }

  // reset() {
  //   window.localStorage.removeItem(LOCAL_STORAGE_KEY)
  // }
}

interface CtxProps {
  data: ChannelData | undefined,
  joinChannel: ChannelJoinHandler | undefined
}

type ChannelJoinHandler = (roomName: string) => Promise<boolean>

const ChannelContext = createContext<CtxProps> ({
  data: undefined,
  joinChannel: undefined
})

interface Props{}
const ChannelProvider: React.FC<Props> = (props: Props) => {
  const [channelData, setChannelData] = useState()

  // const loadChannel = () => {
  //   const channelData = ChannelData.load()
  //   if (channelData !== undefined) {
  //     setChannelData(channelData)
  //   }
  // }

  const joinChannel = (roomName: string, res: any): boolean => {
    const { roomId } = res
    if (res === undefined) {
      return false;
    }

    const channelData = new ChannelData(roomId, roomName)
    // channelData.persist()

    setChannelData(channelData)
    return true;
  }

  const ctxProps: CtxProps = {
    data: channelData,
    joinChannel: async (roonName: string): Promise<boolean> => {
      return joinChannel(roonName, {roomId: 100})
    }
  }
  
  // useEffect(loadChannel, [])

  return (
    <ChannelContext.Provider value={ctxProps} {...props} />
  )
}

const useChannel = (): any => {
  const context = useContext(ChannelContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export { ChannelProvider, useChannel }