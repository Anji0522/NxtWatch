import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HeaderContainer,
  Logo,
  RightSection,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  PopupContainer,
  PopupText,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
} from './styledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <HeaderContainer isDarkTheme={isDarkTheme}>
          <Link to="/">
            <Logo src={websiteLogo} alt="website logo" />
          </Link>

          <RightSection>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={toggleTheme}
            >
              {isDarkTheme ? (
                <FiSun color="#ffffff" size={24} />
              ) : (
                <FaMoon size={24} />
              )}
            </ThemeButton>

            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <Popup
              modal
              trigger={
                <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                  Logout
                </LogoutButton>
              }
              className="popup-content"
            >
              {close => (
                <PopupContainer isDarkTheme={isDarkTheme}>
                  <PopupText isDarkTheme={isDarkTheme}>
                    Are you sure, you want to logout?
                  </PopupText>
                  <ButtonsContainer>
                    <CloseButton type="button" onClick={() => close()}>
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </PopupContainer>
              )}
            </Popup>
          </RightSection>
        </HeaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
