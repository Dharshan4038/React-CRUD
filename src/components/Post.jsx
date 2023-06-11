import React from 'react'
import { Link } from "react-router-dom";

const Post = ({post}) => {
  
  return (
    <div className='post'>
      <Link style={{textDecoration: "none",color:"black"}}  to={`post/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.datetime}</p>
      </Link>
      <p>{(post.body).length <= 25 ? post.body : `${(post.body).slice(0,25)}...` }</p>
      <hr />
    </div>
  )
}

export default Post;