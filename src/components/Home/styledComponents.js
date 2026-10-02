import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 60px);
`

export const HomeContainer = styled.main`
  flex-grow: 1;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: calc(100vh - 60px);
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const BannerContent = styled.div`
  max-width: 350px;
`

export const BannerLogo = styled.img`
  width: 120px;
  margin-bottom: 16px;
`

export const BannerText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #1e293b;
  margin-bottom: 20px;
`

export const BannerButton = styled.button`
  background: transparent;
  border: 1px solid #1e293b;
  color: #1e293b;
  padding: 8px 16px;
  font-weight: 600;
  cursor: pointer;
`

export const BannerCloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`

export const ContentSection = styled.div`
  padding: 24px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
  height: 36px;
  border: 1px solid ${props => (props.isDarkTheme ? '#606060' : '#cbd5e1')};
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  margin-bottom: 24px;
`

export const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 0 12px;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 14px;
`

export const SearchButton = styled.button`
  height: 100%;
  width: 60px;
  border: none;
  border-left: 1px solid ${props =>
    props.isDarkTheme ? '#606060' : '#cbd5e1'};
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#f4f4f4')};
  color: ${props => (props.isDarkTheme ? '#909090' : '#606060')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const VideosList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style: none;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 16px;
`

export const FailureImg = styled.img`
  width: 250px;
  margin-bottom: 20px;
`

export const FailureHeading = styled.h1`
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  margin-bottom: 10px;
`

export const FailureText = styled.p`
  font-size: 14px;
  color: #64748b;
  margin-bottom: 20px;
`

export const RetryBtn = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  padding: 10px 24px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
`
