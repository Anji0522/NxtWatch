import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideosList: [],
  addVideoToSavedVideos: () => {},
  activeTab: 'HOME',
  changeTab: () => {},
})

export default NxtWatchContext
