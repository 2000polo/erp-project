import React from 'react'
import ChatHeader from './ChatHeader'
import ChatProfiles from './ChatProfiles'
import RecentChatItemList from './RecentChatItemList'
import SearchChat from './SearchChat'

const ChatHome = () => {
  return (
    <>
        {/* Header */}
        {/* Search component */}
        <SearchChat />
        {/* Chat Profiles */}
        <ChatProfiles />
        {/* Recent chats */}
        <RecentChatItemList />
    </>
  )
}

export default ChatHome