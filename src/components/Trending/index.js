import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {GoPrimitiveDot} from 'react-icons/go'

import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  TrendingMainContainer,
  TrendingContainer,
  BannerHeader,
  IconContainer,
  RouteHeading,
  TrendingList,
  TrendingItem,
  Thumbnail,
  ItemDetails,
  VideoTitle,
  ChannelTitle,
  MetaInfo,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureText,
  RetryBtn,
} from './styledComponents'

const Trending = () => {
  const [trendingVideos, setTrendingVideos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const getTrendingVideos = async () => {
    setIsLoading(true)
    setIsError(false)
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updated = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      setTrendingVideos(updated)
      setIsLoading(false)
    } else {
      setIsError(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getTrendingVideos()
  }, [])

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <>
            <Header />
            <TrendingMainContainer>
              <Sidebar />
              <TrendingContainer
                data-testid="trending"
                isDarkTheme={isDarkTheme}
              >
                <BannerHeader data-testid="banner" isDarkTheme={isDarkTheme}>
                  <IconContainer isDarkTheme={isDarkTheme}>
                    <HiFire size={30} color="#ff0b37" />
                  </IconContainer>
                  <RouteHeading isDarkTheme={isDarkTheme}>
                    Trending
                  </RouteHeading>
                </BannerHeader>

                {isLoading && (
                  <LoaderContainer data-testid="loader">
                    <Loader
                      type="ThreeDots"
                      color="#4f46e5"
                      height="50"
                      width="50"
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
                      alt="failure view"
                    />
                    <FailureHeading isDarkTheme={isDarkTheme}>
                      Oops! Something Went Wrong
                    </FailureHeading>
                    <FailureText>We are having some trouble</FailureText>
                    <RetryBtn type="button" onClick={getTrendingVideos}>
                      Retry
                    </RetryBtn>
                  </FailureContainer>
                )}

                {!isLoading && !isError && (
                  <TrendingList>
                    {trendingVideos.map(each => (
                      <TrendingItem key={each.id}>
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
                      </TrendingItem>
                    ))}
                  </TrendingList>
                )}
              </TrendingContainer>
            </TrendingMainContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Trending
