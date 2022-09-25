export interface VideoDataType {
  title: string
  channelTitle: string
  description: string
  videoID: string
  venueType: string
  waterType: string
  fishing: string
  subFishing: string
  videoLanguage: string
  subtitles: string[]
  likes: number
  thumbnails: string[]
  socialLinks: string[]
  logoURL: string
  publishedAt: string
  coverImgLink: string
}

export enum API {
  SKIP = 0,
  LIMIT = 10,
}
