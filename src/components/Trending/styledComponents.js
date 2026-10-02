import styled from 'styled-components'

export const TrendingMainContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 60px);
`

export const TrendingContainer = styled.main`
  flex-grow: 1;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  max-height: calc(100vh - 60px);
  overflow-y: auto;
`

export const BannerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f1f1f1')};
`

export const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#e2e8f0')};
`

export const RouteHeading = styled.h1`
  font-size: 24px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
`

export const TrendingList = styled.ul`
  list-style: none;
  padding: 24px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const TrendingItem = styled.li`
  display: flex;
  gap: 16px;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`

export const Thumbnail = styled.img`
  width: 320px;
  aspect-ratio: 16 / 9;
  object-fit: cover;

  @media (max-width: 576px) {
    width: 100%;
  }
`

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  margin: 0 0 8px 0;
`

export const ChannelTitle = styled.p`
  font-size: 14px;
  color: #64748b;
  margin: 0 0 6px 0;
`

export const MetaInfo = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #64748b;
  margin: 0;
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
