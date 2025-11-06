import Name from "../register-page/name";
import Email from "../register-page/email";
import PhoneNumber from "../register-page/phone";
import Password from "../register-page/password";
import ConfirmPassword from "../register-page/confirmPass";
import { useState } from "react";
import { Link } from 'react-router';
const RegisterPage = () => {

const [text, setText] = useState("");

    return ( <div className="max-w-lg mx-auto mt-28 space-y-4 p-6  bg-gray-100 rounded-lg shadow-lg">
   <h1 className=" font-bold text-center text-2xl ">Create your account</h1>
  <Name 
  label='Full name'
  name='full name'


  />
  <Email 
    label='Email address'
  name='email address'

  />
  <PhoneNumber 
    label='Phone Number'
  name='phone number'
  />
  <Password
    label='Password'
  name='password'
  />
  <ConfirmPassword
    label='Confirm password'
  name='confirm password'
  />
  <button className="w-full bg-green-500 text-white rounded-lg hover:bg-green-200   p-2  cursor-pointer-text-white">Create account</button>
  {/* <p> have an account? <Link to='/login' >Log in</Link></p> */}
    </div> );
}
 
export default RegisterPage;