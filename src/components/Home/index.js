import {useState, useEffect, useCallback} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCard from '../VideoCard'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HomeMainContainer,
  HomeContainer,
  BannerContainer,
  BannerContent,
  BannerLogo,
  BannerText,
  BannerButton,
  BannerCloseBtn,
  ContentSection,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideosList,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureText,
  RetryBtn,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const Home = () => {
  const [searchInput, setSearchInput] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [videoList, setVideoList] = useState([])
  const [showBanner, setShowBanner] = useState(true)
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const getVideos = useCallback(async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
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
      setVideoList(updatedData)
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }, [searchValue])

  useEffect(() => {
    getVideos()
  }, [getVideos])

  const renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  const renderFailureView = isDarkTheme => (
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
      <RetryBtn type="button" onClick={getVideos}>
        Retry
      </RetryBtn>
    </FailureContainer>
  )

  const renderVideosView = isDarkTheme => {
    if (videoList.length === 0) {
      return (
        <FailureContainer>
          <FailureImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <FailureHeading isDarkTheme={isDarkTheme}>
            No Search results found
          </FailureHeading>
          <FailureText>
            Try different key words or remove search filter
          </FailureText>
          <RetryBtn type="button" onClick={getVideos}>
            Retry
          </RetryBtn>
        </FailureContainer>
      )
    }

    return (
      <VideosList>
        {videoList.map(each => (
          <VideoCard key={each.id} videoDetails={each} />
        ))}
      </VideosList>
    )
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <>
            <Header />
            <HomeMainContainer>
              <Sidebar />
              <HomeContainer data-testid="home" isDarkTheme={isDarkTheme}>
                {showBanner && (
                  <BannerContainer data-testid="banner">
                    <BannerContent>
                      <BannerLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerContent>
                    <BannerCloseBtn
                      data-testid="close"
                      onClick={() => setShowBanner(false)}
                    >
                      <AiOutlineClose size={16} />
                    </BannerCloseBtn>
                  </BannerContainer>
                )}

                <ContentSection>
                  <SearchContainer isDarkTheme={isDarkTheme}>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      onChange={e => setSearchInput(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === 'Enter') setSearchValue(searchInput)
                      }}
                      isDarkTheme={isDarkTheme}
                    />
                    <SearchButton
                      type="button"
                      data-testid="searchButton"
                      onClick={() => setSearchValue(searchInput)}
                      isDarkTheme={isDarkTheme}
                    >
                      <AiOutlineSearch size={18} />
                    </SearchButton>
                  </SearchContainer>

                  {apiStatus === apiStatusConstants.inProgress &&
                    renderLoader()}
                  {apiStatus === apiStatusConstants.failure &&
                    renderFailureView(isDarkTheme)}
                  {apiStatus === apiStatusConstants.success &&
                    renderVideosView(isDarkTheme)}
                </ContentSection>
              </HomeContainer>
            </HomeMainContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Home
