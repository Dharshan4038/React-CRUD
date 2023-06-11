import React from 'react'
import { useParams,Link } from 'react-router-dom'

const PostPage = ({posts,handleDelete}) => {
  const {id} = useParams();
  const post = posts.find(post=>(post.id).toString()===id);

  return (
    <div>
      <article className='mt-5 mx-5' >
          {post &&
            <>
              <h2>{post.title}</h2>
              <p>{post.datetime}</p>
              <p>{post.body}</p>
              <Link to={`/edit/${post.id}`} >
                <button className='btn btn-info' style={{marginRight:"1rem"}} >Edit Post</button>
              </Link>
              <button className='btn btn-danger' onClick={()=>handleDelete(post.id)}>Delete Post</button>
            </>
          }
          {
            !post && 
            <>
              <h2 className='text-center' >404 Page Not Found</h2>
              <p>Go to <Link to="/">Home</Link> </p>
            </>
          }
      </article>
    </div>
  )
}

export default PostPage