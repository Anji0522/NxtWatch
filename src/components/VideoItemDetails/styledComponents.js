import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 60px);
`

export const VideoContentContainer = styled.main`
  flex-grow: 1;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  padding: 24px;
  max-height: calc(100vh - 60px);
  overflow-y: auto;
`

export const PlayerWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  max-height: 550px;
  margin-bottom: 16px;
`

export const VideoTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  margin-bottom: 12px;
`

export const VideoInfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`

export const StatsText = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #64748b;
  margin: 0;
`

export const ActionButtonsList = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
`

export const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid ${props => (props.isDarkTheme ? '#475569' : '#cbd5e1')};
  margin: 20px 0;
`

export const ChannelDetails = styled.div`
  display: flex;
  gap: 16px;
`

export const ChannelLogo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`

export const ChannelTextGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  margin: 0 0 4px 0;
`

export const SubscribersText = styled.p`
  font-size: 12px;
  color: #64748b;
  margin: 0 0 16px 0;
`

export const DescriptionText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
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
