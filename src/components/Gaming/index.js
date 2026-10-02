import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'

import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  GamingMainContainer,
  GamingContainer,
  BannerHeader,
  IconContainer,
  RouteHeading,
  GamingList,
  GamingItem,
  Thumbnail,
  GameTitle,
  WatchingText,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureText,
  RetryBtn,
} from './styledComponents'

const Gaming = () => {
  const [gamingVideos, setGamingVideos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const getGamingVideos = async () => {
    setIsLoading(true)
    setIsError(false)
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
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
        viewCount: each.view_count,
      }))
      setGamingVideos(updated)
      setIsLoading(false)
    } else {
      setIsError(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getGamingVideos()
  }, [])

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <>
            <Header />
            <GamingMainContainer>
              <Sidebar />
              <GamingContainer data-testid="gaming" isDarkTheme={isDarkTheme}>
                <BannerHeader data-testid="banner" isDarkTheme={isDarkTheme}>
                  <IconContainer isDarkTheme={isDarkTheme}>
                    <SiYoutubegaming size={30} color="#ff0b37" />
                  </IconContainer>
                  <RouteHeading isDarkTheme={isDarkTheme}>Gaming</RouteHeading>
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
                    <RetryBtn type="button" onClick={getGamingVideos}>
                      Retry
                    </RetryBtn>
                  </FailureContainer>
                )}

                {!isLoading && !isError && (
                  <GamingList>
                    {gamingVideos.map(each => (
                      <GamingItem key={each.id}>
                        <Link to={`/videos/${each.id}`}>
                          <Thumbnail
                            src={each.thumbnailUrl}
                            alt="video thumbnail"
                          />
                          <GameTitle isDarkTheme={isDarkTheme}>
                            {each.title}
                          </GameTitle>
                          <WatchingText>
                            {each.viewCount} Watching Worldwide
                          </WatchingText>
                        </Link>
                      </GamingItem>
                    ))}
                  </GamingList>
                )}
              </GamingContainer>
            </GamingMainContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Gaming
