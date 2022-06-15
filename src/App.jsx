import * as React from "react"
import Feed from "./components/Feed/Feed"
import Navbar from "./components/Navbar/Navbar"
import UserProfile from "./components/UserProfile/UserProfile"
import Advertisements from "./components/Advertisements/Advertisements"
import { codepathUserProfile, firstTweet, navLinks } from "./constants"
import { useState } from "react"

export default function App() {
  let [userProfile, setUserProfile] = useState(codepathUserProfile)
  let arr = new Array(firstTweet)
  let [tweets, setTweets] = useState(arr)
  let [tweetText, setTweetText] = useState("")
  let [disable, setDisable] = useState(true)

  return (
    <div className="app">
      <Navbar navLinks={navLinks}/>
      <main>
        <UserProfile userProfile={userProfile} setUserProfile={setUserProfile}/>
        <Feed tweets={tweets} setTweets={setTweets} userProfile={userProfile} tweetText={tweetText} setTweetText={setTweetText}
        disable={disable} setDisable={setDisable}/>
        <Advertisements />
      </main>
    </div>
  )
}
