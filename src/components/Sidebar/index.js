import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SidebarContainer,
  NavList,
  NavItem,
  NavLinkItem,
  NavText,
  ContactContainer,
  ContactHeading,
  SocialMediaContainer,
  SocialMediaIcon,
  ContactDescription,
} from './styledComponents'

const Sidebar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, changeTab} = value

      return (
        <SidebarContainer isDarkTheme={isDarkTheme}>
          <NavList>
            <NavLinkItem to="/" onClick={() => changeTab('HOME')}>
              <NavItem
                isActive={activeTab === 'HOME'}
                isDarkTheme={isDarkTheme}
              >
                <AiFillHome
                  color={activeTab === 'HOME' ? '#ff0b37' : '#606060'}
                  size={20}
                />
                <NavText isDarkTheme={isDarkTheme}>Home</NavText>
              </NavItem>
            </NavLinkItem>

            <NavLinkItem to="/trending" onClick={() => changeTab('TRENDING')}>
              <NavItem
                isActive={activeTab === 'TRENDING'}
                isDarkTheme={isDarkTheme}
              >
                <HiFire
                  color={activeTab === 'TRENDING' ? '#ff0b37' : '#606060'}
                  size={20}
                />
                <NavText isDarkTheme={isDarkTheme}>Trending</NavText>
              </NavItem>
            </NavLinkItem>

            <NavLinkItem to="/gaming" onClick={() => changeTab('GAMING')}>
              <NavItem
                isActive={activeTab === 'GAMING'}
                isDarkTheme={isDarkTheme}
              >
                <SiYoutubegaming
                  color={activeTab === 'GAMING' ? '#ff0b37' : '#606060'}
                  size={20}
                />
                <NavText isDarkTheme={isDarkTheme}>Gaming</NavText>
              </NavItem>
            </NavLinkItem>

            <NavLinkItem
              to="/saved-videos"
              onClick={() => changeTab('SAVED_VIDEOS')}
            >
              <NavItem
                isActive={activeTab === 'SAVED_VIDEOS'}
                isDarkTheme={isDarkTheme}
              >
                <CgPlayListAdd
                  color={activeTab === 'SAVED_VIDEOS' ? '#ff0b37' : '#606060'}
                  size={20}
                />
                <NavText isDarkTheme={isDarkTheme}>Saved Videos</NavText>
              </NavItem>
            </NavLinkItem>
          </NavList>

          <ContactContainer>
            <ContactHeading isDarkTheme={isDarkTheme}>
              CONTACT US
            </ContactHeading>
            <SocialMediaContainer>
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaContainer>
            <ContactDescription isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactDescription>
          </ContactContainer>
        </SidebarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Sidebar
