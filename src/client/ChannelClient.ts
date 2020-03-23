import { HttpClient, WeshResult } from "../common/http";

export interface JoinResponse {
  channelId: string
  channelName: string,
  channelCreator: string,
  currentMusic: string,
  playlist: [any],
  userlist: [string],
  streamingUri: string
}


export class ChannelClient {
  static async join(userId: string, channelName: string): Promise<WeshResult<JoinResponse>> {
    return HttpClient.post(`/channel/${channelName}/join`, {
      userId: userId
    })
  }
}