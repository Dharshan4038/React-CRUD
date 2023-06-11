import React from 'react'

const NewPost = ({postTitle,setPostTitle,postBody,setPostBody,handleSubmit}) => {
  
  
  return (
    <div className='mx-5'>
        <h2 className='text-center' >New Post</h2>
        <form onSubmit={handleSubmit} className='mt-5'  >
            <div className="row mb-3">
                <label  className="col-sm-2 col-form-label">Title:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" style={{width: "50%"}} value={postTitle} onChange={(e)=> setPostTitle(e.target.value)} required />
                </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Post</label>
              <div className="col-sm-10">
                <textarea value={postBody} onChange={(e)=> setPostBody(e.target.value)} cols="30" rows="10" style={{width: "50%",resize:"none"}} required></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 btn-lg">Post</button>
        </form>
    </div>
  )
}

export default NewPost