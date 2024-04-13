import  { useState } from 'react';

import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const CreatePost = () => {
  const navigate= useNavigate()
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const username= useSelector((state)=>state.user.value.username)
  useEffect(()=>{
    if(username==='')
   navigate('/login')
  },[])
 
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the submission of the post data here
    console.log('Title:', title);
    console.log('Text:', text);
    const data={title:title , postText:text , username : username}
    // Reset the form fields after submission if needed
    axios.post("http://localhost:3001/posts" , data).
    then((res)=>{
        console.log(res.data);
    })
    setTitle('');
    setText('');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full mt-1 p-2 border bg-gray-800 text-yellow-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter post title"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="text" className="block font-medium">Text</label>
          <textarea
            id="text"
            value={text}
            onChange={handleTextChange}
            className="w-full mt-1 p-2 border bg-gray-800 text-yellow-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter post text"
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-blue-700">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
