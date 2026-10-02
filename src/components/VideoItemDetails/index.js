import {useState, useEffect, useCallback} from 'react'
import {useParams} from 'react-router-dom'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {GoPrimitiveDot} from 'react-icons/go'
import {formatDistanceToNow} from 'date-fns'

import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoDetailsContainer,
  VideoContentContainer,
  PlayerWrapper,
  VideoTitle,
  VideoInfoBar,
  StatsText,
  ActionButtonsList,
  ActionButton,
  HorizontalLine,
  ChannelDetails,
  ChannelLogo,
  ChannelTextGroup,
  ChannelName,
  SubscribersText,
  DescriptionText,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureText,
  RetryBtn,
} from './styledComponents'

const VideoItemDetails = () => {
  const {id} = useParams()
  const [videoData, setVideoData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)

  const getVideoDetails = useCallback(async () => {
    setIsLoading(true)
    setIsError(false)
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const d = data.video_details
      const updated = {
        id: d.id,
        title: d.title,
        videoUrl: d.video_url,
        thumbnailUrl: d.thumbnail_url,
        channel: {
          name: d.channel.name,
          profileImageUrl: d.channel.profile_image_url,
          subscriberCount: d.channel.subscriber_count,
        },
        viewCount: d.view_count,
        publishedAt: d.published_at,
        description: d.description,
      }
      setVideoData(updated)
      setIsLoading(false)
    } else {
      setIsError(true)
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getVideoDetails()
  }, [getVideoDetails])

  const onClickLike = () => {
    setIsLiked(prev => !prev)
    setIsDisliked(false)
  }

  const onClickDislike = () => {
    setIsDisliked(prev => !prev)
    setIsLiked(false)
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, savedVideosList, addVideoToSavedVideos} = value

        const isSaved =
          videoData && savedVideosList.some(each => each.id === videoData.id)

        return (
          <>
            <Header />
            <VideoDetailsContainer>
              <Sidebar />
              <VideoContentContainer
                data-testid='videoItemDetails'
                isDarkTheme={isDarkTheme}
              >
                {isLoading && (
                  <LoaderContainer data-testid='loader'>
                    <Loader
                      type='ThreeDots'
                      color='#4f46e5'
                      height='50'
                      width='50'
                    />
                  </LoaderContainer>
                )}

                {isError && (
                  <FailureContainer>
                    <FailureImg
                      src={
                        isDarkTheme
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                      }
                      alt='failure view'
                    />
                    <FailureHeading isDarkTheme={isDarkTheme}>
                      Oops! Something Went Wrong
                    </FailureHeading>
                    <FailureText>We are having some trouble</FailureText>
                    <RetryBtn type='button' onClick={getVideoDetails}>
                      Retry
                    </RetryBtn>
                  </FailureContainer>
                )}

                {!isLoading && !isError && videoData && (
                  <>
                    <PlayerWrapper>
                      <ReactPlayer
                        url={videoData.videoUrl}
                        controls
                        width='100%'
                        height='100%'
                      />
                    </PlayerWrapper>

                    <VideoTitle isDarkTheme={isDarkTheme}>
                      {videoData.title}
                    </VideoTitle>

                    <VideoInfoBar>
                      <StatsText>
                        {videoData.viewCount} views <GoPrimitiveDot />{' '}
                        {formatDistanceToNow(new Date(videoData.publishedAt))}
                      </StatsText>

                      <ActionButtonsList>
                        <ActionButton
                          type='button'
                          active={isLiked}
                          onClick={onClickLike}
                        >
                          <AiOutlineLike size={20} /> Like
                        </ActionButton>
                        <ActionButton
                          type='button'
                          active={isDisliked}
                          onClick={onClickDislike}
                        >
                          <AiOutlineDislike size={20} /> Dislike
                        </ActionButton>
                        <ActionButton
                          type='button'
                          active={isSaved}
                          onClick={() => addVideoToSavedVideos(videoData)}
                        >
                          <BiListPlus size={20} /> {isSaved ? 'Saved' : 'Save'}
                        </ActionButton>
                      </ActionButtonsList>
                    </VideoInfoBar>

                    <HorizontalLine isDarkTheme={isDarkTheme} />

                    <ChannelDetails>
                      <ChannelLogo
                        src={videoData.channel.profileImageUrl}
                        alt='channel logo'
                      />
                      <ChannelTextGroup>
                        <ChannelName isDarkTheme={isDarkTheme}>
                          {videoData.channel.name}
                        </ChannelName>
                        <SubscribersText>
                          {videoData.channel.subscriberCount} subscribers
                        </SubscribersText>
                        <DescriptionText isDarkTheme={isDarkTheme}>
                          {videoData.description}
                        </DescriptionText>
                      </ChannelTextGroup>
                    </ChannelDetails>
                  </>
                )}
              </VideoContentContainer>
            </VideoDetailsContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItemDetails
