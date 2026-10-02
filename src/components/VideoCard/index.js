import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {GoPrimitiveDot} from 'react-icons/go'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoCardItem,
  Thumbnail,
  CardBottom,
  ChannelLogo,
  Details,
  Title,
  ChannelName,
  MetaText,
} from './styledComponents'

const VideoCard = ({videoDetails}) => {
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} =
    videoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        let formattedTime = publishedAt
        try {
          formattedTime = formatDistanceToNow(new Date(publishedAt))
        } catch {
          formattedTime = publishedAt
        }

        return (
          <VideoCardItem>
            <Link to={`/videos/${id}`}>
              <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
              <CardBottom>
                <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
                <Details>
                  <Title isDarkTheme={isDarkTheme}>{title}</Title>
                  <ChannelName>{channel.name}</ChannelName>
                  <MetaText>
                    {viewCount} views <GoPrimitiveDot /> {formattedTime}
                  </MetaText>
                </Details>
              </CardBottom>
            </Link>
          </VideoCardItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoCard
