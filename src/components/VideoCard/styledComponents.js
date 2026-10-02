import styled from 'styled-components'

export const VideoCardItem = styled.li`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;
`

export const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`

export const CardBottom = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`

export const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  margin: 0 0 6px 0;
`

export const ChannelName = styled.p`
  font-size: 12px;
  color: #64748b;
  margin: 0 0 4px 0;
`

export const MetaText = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #64748b;
  margin: 0;
`
