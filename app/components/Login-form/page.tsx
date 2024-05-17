// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { LoginFormValues }  from '../types';

interface LoginData  {
    email : string;
    password: string;
}

// const Login = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>();
//     const [loginError, setLoginError] = useState<string | null>(null);
  
//     const onSubmit = async (data: LoginFormValues) => {
//       // Here you can handle the submission of the login form,
//       // for example, sending the data to an authentication endpoint.
//       try {
//         // Your login logic goes here
//       } catch (error) {
//         setLoginError(error.message);
//       }
//     };
  
//     return (
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>Email</label>
//           <input type="text" {...register('email', { required: true })} />
//           {errors.email && <span>Email is required</span>}
//         </div>
//         <div>
//           <label>Password</label>
//           <input type="password" {...register('password', { required: true })} />
//           {errors.password && <span>Password is required</span>}
//         </div>
//         <button type="submit">Login</button>
//         {loginError && <p>{loginError}</p>}
//       </form>
//     );
// };

// export default Login
