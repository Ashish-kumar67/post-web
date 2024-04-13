import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import { login } from '../store'
import { useDispatch} from 'react-redux';
import axios from 'axios';

const Login = () => {
    const navigate=useNavigate();
    const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors }, trigger } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here

    axios.post("http://localhost:3001/users/login", data)
      .then((res) => {
        if(res.data!=="fail"||res.data!=="no user")
          {
            dispatch(login({username : res.data.username , userid : res.data.id }))
            navigate('/')
          }
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">Email</label>
          <input
            type="text"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address'
              }
            })}
            onBlur={() => trigger('email')}
            className="w-full mt-1 p-2 border bg-gray-800 text-yellow-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block font-medium">Password</label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'Password is required'
            })}
            onBlur={() => trigger('password')}
            className="w-full mt-1 p-2 border bg-gray-800 text-yellow-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-blue-700">Login</button>
      </form>
    </div>
  );
};

export default Login;
