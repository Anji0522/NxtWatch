import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 10;
`

export const Logo = styled.img`
  width: 120px;
  cursor: pointer;
`

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  padding: 0;
`

export const ProfileImage = styled.img`
  width: 28px;
  height: 28px;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  padding: 6px 16px;
  border-radius: 4px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
`

export const PopupContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
`

export const PopupText = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 24px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid #7e858e;
  color: #7e858e;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border: none;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
`
