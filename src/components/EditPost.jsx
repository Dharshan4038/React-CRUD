import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPost = ({posts,editTitle,editBody,setEditTitle,setEditBody,handleEdit}) => {
    const {id} = useParams();
    const post = posts.find((post)=>(post.id).toString()===id);

    useEffect(()=>{
        if (post)  {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    },[post,setEditTitle,setEditBody]);

    return (
    <div className='mx-5'>
        <h2 className='text-center'>Edit Post</h2>
        <form onSubmit={(e)=>e.preventDefault()} className='mt-5'>
            <div className="row mb-3">
                <label  className="col-sm-2 col-form-label">Title:</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" style={{width: "50%"}} value={editTitle} onChange={(e)=> setEditTitle(e.target.value)} required />
                </div>
            </div>
            <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Post</label>
            <div className="col-sm-10">
                <textarea value={editBody} onChange={(e)=> setEditBody(e.target.value)} cols="30" rows="10" style={{width: "50%",resize:"none"}} required></textarea>
            </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 btn-lg" onClick={()=>handleEdit(post.id)} >Update</button>
        </form>
    </div>
  )
}

export default EditPost