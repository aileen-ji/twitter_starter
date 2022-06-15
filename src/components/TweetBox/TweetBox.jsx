import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  const handleOnTweetTextChange = (event) => {
    props.setTweetText(event.target.value)
    props.setDisable(false)
    if(event.target.value.length > 140){
      props.setDisable(true)
    }
  }

  const handleDisable = (event) => {
    
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
    if(!props.tweetText){
      props.setDisable(true)
    }
    props.setTweets(state => [...state, newTweet])
    props.setTweetText("")
  }

  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={props.tweetText}  handleOnChange={handleOnTweetTextChange}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} disable={props.disable}/>
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
  return <span class="tweet-length" onChange={props.handleOnChange}>{props.tweetText.length}</span>
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={props.handleOnSubmit} disabled={props.disable}>Tweet</button>
    </div>
  )
}
