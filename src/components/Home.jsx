import React from 'react'
import Feed from './Feed'

const Home = ({post}) => {
  return (
    <div className='home' >
      {post.length ? (
            <Feed post={post} />
        ) : (
            <p style={{marginTop: "2rem"}} >No posts to display...</p>
        )
      }
        
    </div>
  )
}

export default Home