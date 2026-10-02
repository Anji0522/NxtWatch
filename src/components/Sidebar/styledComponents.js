import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.aside`
  width: 240px;
  min-width: 240px;
  min-height: calc(100vh - 60px);
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
`

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const NavLinkItem = styled(Link)`
  text-decoration: none;
`

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 24px;
  background-color: ${props => {
    if (props.isActive) {
      return props.isDarkTheme ? '#383838' : '#f1f5f9'
    }
    return 'transparent'
  }};
  cursor: pointer;
`

export const NavText = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  margin: 0;
  font-weight: 500;
`

export const ContactContainer = styled.div`
  padding: 0 24px;
`

export const ContactHeading = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  margin-bottom: 16px;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`

export const SocialMediaIcon = styled.img`
  width: 28px;
  height: 28px;
`

export const ContactDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
  margin: 0;
`
