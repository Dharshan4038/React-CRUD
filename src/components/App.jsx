import React, { useEffect, useState } from 'react';
import { Routes,Route, useNavigate } from "react-router-dom";
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';
import { format } from 'date-fns';
import api from "../api/Posts";
import EditPost from './EditPost';
import useWindowSize from '../hooks/useWindowSize';

const App = () => {
  const [posts,setPosts] = useState([]);
  const [search,setSearch] = useState("");
  const [searchResults,setSearchResults] = useState([]);
  const [postTitle,setPostTitle] = useState("");
  const [postBody,setPostBody] = useState("");
  const [editTitle,setEditTitle] = useState("");
  const [editBody,setEditBody] = useState("");
  const {width} = useWindowSize(); // custom hook
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      }
      catch(err) {
          if(err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.header);
          } 
          else {
            console.log(`Error: ${err.message}`);
          }
      }
    }
    fetchPosts();
  }, [])


  useEffect(()=> {
    const filterResults = posts.filter((post) => 
      ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase()) 
    )
    setSearchResults(filterResults.reverse());

  },[posts,search]);

  const handleSubmit = async (event) => {
      event.preventDefault();
      const id = posts.length ? (posts[posts.length - 1].id) + 1 : 1;
      const datetime = format(new Date(),'MMMM dd yyyy pp'); 
      const newPost = {id:id,title:postTitle,datetime,body:postBody};
      try {
        const response = await api.post('/posts', newPost);
        const allPosts = [...posts,response.data];
        setPosts(allPosts);
        setPostTitle("");
        setPostBody("");
        navigate("/");
      } 
      catch(err) {
        if(err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.header);
        } 
        else {
          console.log(`Error: ${err.message}`);
        }
    }
  }

  const handleEdit = async (id) => {
      const datetime = format(new Date(),'MMMM dd yyyy pp'); 
      const updatedPost = {id:id,title:editTitle,datetime,body:editBody};
      try {
        const response = await api.put(`/posts/${id}`,updatedPost);
        setPosts(posts.map((post)=>post.id===id ?{...response.data}: post));
        setEditTitle("");
        setEditBody("");
        navigate("/");
      }
      catch(err) {
          if(err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.header);
          } 
          else {
            console.log(`Error: ${err.message}`);
          }
      }
  }

  const handleDelete = async (id) => {
    try {
        await api.delete(`/posts/${id}`)
        const postList = posts.filter((post)=>post.id!==id)
        setPosts(postList);
        navigate("/");
    } 
    catch(err) {
        if(err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.header);
        } 
        else {
          console.log(`Error: ${err.message}`);
        }
    }
  }


  return (
    <div>
        <Header title="Social Media App" width={width}  />
        <Nav 
          search={search} 
          setSearch={setSearch} 
        />
        <Routes>
            <Route path="/" element={<Home
              post = {searchResults}
            />} />

            <Route path='post' >
                <Route index element={<NewPost 
                  handleSubmit={handleSubmit}
                  postTitle={postTitle}
                  setPostTitle={setPostTitle}
                  postBody={postBody}
                  setPostBody={setPostBody}
                />} />

                <Route path=':id' element={<PostPage posts={posts} handleDelete={handleDelete} />} />
            </Route>
            
            <Route path='edit/:id' element={<EditPost
              posts={posts}
              editTitle={editTitle}
              editBody={editBody}
              setEditTitle={setEditTitle}
              setEditBody={setEditBody}
              handleEdit={handleEdit}
            />}/>
            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
        </Routes>
        
        <Footer />
    </div>
  )
}

export default App;