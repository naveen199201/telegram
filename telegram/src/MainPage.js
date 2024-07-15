import React from 'react'
import ChatList from './ChatList'
import ChatDetails from './ChatDetails'
import './MainPage.scss'


const MainPage = () => {
  return (
    <div className="mainPage"> 
        <ChatList />
        <ChatDetails />
    </div>
  )
}

export default MainPage