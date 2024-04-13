
import { useForm } from 'react-hook-form';
import axios from 'axios'
const Signup = () => {
  const { register, handleSubmit, formState: { errors } , trigger} = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here

    axios.post("http://localhost:3001/users" , data).
    then((res)=>{
        console.log(res.data);
    })

  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
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
            className="w-full mt-1 p-2 border  bg-gray-800 text-yellow-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block font-medium">Username</label>
          <input
            type="text"
            id="username"
           

            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username must be at least 3 characters long'
              },
              maxLength: {
                value: 8,
                message: 'Username cannot be more than 8 characters long'
              }
            })}
            onBlur={() => trigger('username')}
            className="w-full mt-1 p-2 bg-gray-800 text-yellow-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.username && <p className="text-red-500">{errors.username.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block font-medium">Password</label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 5,
                message: 'Password must be at least 5 characters long'
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                message: 'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character'
              }
            })}
            onBlur={() => trigger('password')}
            className="w-full mt-1 p-2 border   bg-gray-800 text-yellow-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-blue-700">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
