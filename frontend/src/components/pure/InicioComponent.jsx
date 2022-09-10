import React from 'react'
import PigComponent from '../container/PigComponent'
import './InicioComponent.css'

const InicioComponent = ({tweets}) => {

  const tweetList = () => (
    <div>

    {/* añadida key para evitar error de duplicidad */}
    {/* Warning: Each Child in a List Should Have a Unique 'key' Prop */}
    {/* {tweets.map(tweet => <li>{tweet.username}-{tweet.content}</li>)} */}
    { tweets.map((tweet) => {
          return (
            <li key={tweet.id}>
                <PigComponent 
                username={tweet.username} 
                name={tweet.name} 
                content={tweet.content} 
                image={tweet.image}/>
            </li>
          )
          
      }).sort().reverse()
    }
      
    </div>
  )
  return (
    <div>
      {tweetList()}
    </div>
  )
}

export default InicioComponent