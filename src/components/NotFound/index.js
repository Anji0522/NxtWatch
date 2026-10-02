import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NotFoundMainContainer,
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Header />
          <NotFoundMainContainer>
            <Sidebar />
            <NotFoundContainer isDarkTheme={isDarkTheme}>
              <NotFoundImg
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundHeading isDarkTheme={isDarkTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundText>
                We are sorry, the page you requested could not be found.
              </NotFoundText>
            </NotFoundContainer>
          </NotFoundMainContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
