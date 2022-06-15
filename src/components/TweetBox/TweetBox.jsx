import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  const handleOnTweetTextChange = (event) => {
    props.setTweetText(event.target.value)
    
  }


  const handleOnSubmit = () => {
    let newTweet = {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text:props.tweetText,
      comments:0,
      retweets:0,
      likes:0,
      id:props.tweets.length
    }
    props.setTweets(state => [...state, newTweet])
    props.setTweetText("")
  }

  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={props.tweetText}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} check={(!props.tweetText) || (props.tweetText.length > 140)}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  let inner = 140 - props.tweetText.length
  if(!props.tweetText){
    inner = null
  }
  let classVar = "tweet-length"
  if(props.tweetText.length > 140){
    classVar = "tweet-length red"
  }
  return (
    <span className={classVar}>{inner}</span>
  )
  
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" disabled={props.check} onClick={props.handleOnSubmit}>Tweet</button>
    </div>
  )
}