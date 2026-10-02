import {CgPlayListAdd} from 'react-icons/cg'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {GoPrimitiveDot} from 'react-icons/go'

import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SavedMainContainer,
  SavedContainer,
  BannerHeader,
  IconContainer,
  RouteHeading,
  VideosList,
  VideoItem,
  Thumbnail,
  ItemDetails,
  VideoTitle,
  ChannelTitle,
  MetaInfo,
  NoVideosContainer,
  NoVideosImg,
  NoVideosHeading,
  NoVideosText,
} from './styledComponents'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideosList} = value
      const hasVideos = savedVideosList.length > 0

      return (
        <>
          <Header />
          <SavedMainContainer>
            <Sidebar />
            <SavedContainer data-testid="savedVideos" isDarkTheme={isDarkTheme}>
              {hasVideos ? (
                <>
                  <BannerHeader data-testid="banner" isDarkTheme={isDarkTheme}>
                    <IconContainer isDarkTheme={isDarkTheme}>
                      <CgPlayListAdd size={30} color="#ff0b37" />
                    </IconContainer>
                    <RouteHeading isDarkTheme={isDarkTheme}>
                      Saved Videos
                    </RouteHeading>
                  </BannerHeader>

                  <VideosList>
                    {savedVideosList.map(each => (
                      <VideoItem key={each.id}>
                        <Link to={`/videos/${each.id}`}>
                          <Thumbnail
                            src={each.thumbnailUrl}
                            alt="video thumbnail"
                          />
                          <ItemDetails>
                            <VideoTitle isDarkTheme={isDarkTheme}>
                              {each.title}
                            </VideoTitle>
                            <ChannelTitle>{each.channel.name}</ChannelTitle>
                            <MetaInfo>
                              {each.viewCount} views <GoPrimitiveDot />{' '}
                              {formatDistanceToNow(new Date(each.publishedAt))}
                            </MetaInfo>
                          </ItemDetails>
                        </Link>
                      </VideoItem>
                    ))}
                  </VideosList>
                </>
              ) : (
                <NoVideosContainer>
                  <NoVideosImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoVideosHeading isDarkTheme={isDarkTheme}>
                    No saved videos found
                  </NoVideosHeading>
                  <NoVideosText>
                    You can save your videos while watching them
                  </NoVideosText>
                </NoVideosContainer>
              )}
            </SavedContainer>
          </SavedMainContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
