import React, { createContext, useState, useContext } from "react";
import { HttpClient, WeshResult } from "../common/http";
import { ChannelClient } from "../client/ChannelClient";

export class ChannelData {
  constructor(
    public channelId: string,
    public channelName: string, 
    public streamUrl: string,
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
  joinChannel: ChannelJoinHandler
}

type ChannelJoinHandler = (channelName: string) => Promise<boolean>

const ChannelContext = createContext<CtxProps> ({
  data: undefined,
  joinChannel: async () => { 
    console.error('channel context not initialized')
    return false 
  }
})

interface Props{}
const ChannelProvider: React.FC<Props> = (props: Props) => {
  const [channelData, setChannelData] = useState<ChannelData>()

  const joinChannel = (res: any): boolean => {
    const { channelId, channelName, streamUrl } = res
    if (res === undefined) {
      return false;
    }

    const channelData = new ChannelData(channelId, channelName, streamUrl)

    setChannelData(channelData)
    return true;
  }

  const ctxProps: CtxProps = {
    data: channelData,
    joinChannel: async (channelName: string): Promise<boolean> => {
      const res = await ChannelClient.join("denn", channelName)

      if (res.result) {
        return joinChannel({
          channelId: res.result.channelId, 
          channelName: res.result.channelName, 
          streamUrl: res.result.streamingUri && res.result.streamingUri !== "" ? 
            res.result.streamingUri : "http://localhost:5000/get_m3u8"
        })
      } else {
        return false
      }
    }
  }
  
  // useEffect(loadChannel, [])

  return (
    <ChannelContext.Provider value={ctxProps} {...props} />
  )
}

const useChannel = (): CtxProps => {
  const context = useContext(ChannelContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export { ChannelProvider, useChannel }