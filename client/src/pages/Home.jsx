
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useEffect , useState } from 'react'
function Home() {
  const navigate= useNavigate()
    const [postList , setPostList]= useState([]);
    const username= useSelector((state)=>state.user.value.username)
    const userId= useSelector((state)=>state.user.value.userid)
    useEffect(()=>{
      
      if(username==='')
      navigate('/login')

      axios.get("http://localhost:3001/posts").
      then((res)=>{
          setPostList(res.data);
      })
    },[])


    const handleLike=(postId)=>{
      axios.post("http://localhost:3001/likes",{PostId:postId , UserId:userId}).
      then((res)=>{
       alert(res.data);
    })
    }
  return (
    <div>
      {
      postList.map((value , key)=>{
        return <div key={key}>
          <div className="bg-gray-800 text-white rounded-lg p-4 m-5 shadow-custom">
        <h2 className=" bg-blue-800 text-2xl  font-bold mb-2">{value.title}</h2>
        <p className="mb-4">{value.postText}</p>
        <p className="text-sm">Posted by {value.username}</p>
        <button onClick={() => handleLike(value.id)}>👍</button>
         <label >{value.Likes.length}</label>
      </div>
      
        </div>
        
  
      })
     }
    </div>
  )
}

export default Home
