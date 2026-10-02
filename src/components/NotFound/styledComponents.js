import styled from 'styled-components'

export const NotFoundMainContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 60px);
`

export const NotFoundContainer = styled.main`
  flex-grow: 1;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
  text-align: center;
`

export const NotFoundImg = styled.img`
  width: 300px;
  margin-bottom: 24px;
`

export const NotFoundHeading = styled.h1`
  font-size: 24px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  margin-bottom: 12px;
`

export const NotFoundText = styled.p`
  font-size: 14px;
  color: #64748b;
`
