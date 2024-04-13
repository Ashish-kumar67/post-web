import './App.css'
import {  Route, Routes , BrowserRouter , Link } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import { Provider } from 'react-redux'
import Login from './pages/Login'
import { store } from './store'
import CreatePost from './pages/CreatePost'
function App() {
  
 
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Link
      to="/createPost"
      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-block"
    >
      create a post
    </Link>
      <Routes>
        <Route path='/Signup' element={<Signup/>}/>
       <Route path='/Login' element={<Login/>}/> 
       <Route path='/' element={<Home/>}/>
       <Route path='/createPost' element={<CreatePost/>}/>
      </Routes>
    </BrowserRouter>
   </Provider>
  )
}

export default App
