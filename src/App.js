import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideosList: [],
    activeTab: 'HOME',
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideoToSavedVideos = video => {
    this.setState(prevState => {
      const isPresent = prevState.savedVideosList.find(
        each => each.id === video.id,
      )
      if (isPresent) {
        return {
          savedVideosList: prevState.savedVideosList.filter(
            each => each.id !== video.id,
          ),
        }
      }
      return {savedVideosList: [...prevState.savedVideosList, video]}
    })
  }

  render() {
    const {isDarkTheme, savedVideosList, activeTab} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          savedVideosList,
          addVideoToSavedVideos: this.addVideoToSavedVideos,
          activeTab,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
