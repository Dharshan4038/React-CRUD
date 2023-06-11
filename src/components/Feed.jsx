import React from 'react'
import Post from './Post';

export const Feed = ({post}) => {
  return (
    <div>
        {post.map( (post) => {
            return <Post key={post.id} post={post} />
        })}
    </div>
  )
}

export default Feed;