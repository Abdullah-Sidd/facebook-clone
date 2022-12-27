import { useSession, signIn, signOut,getSession } from "next-auth/react"
import React from "react";
function Login() {
  return (
    <div className="grid place-items-center">
      <img
        src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/b1aa8b0a0bda9c4365b80609703fdc76"
        height={400}
        width={400}
        objectFit="contain"
      />
      <h1
        className="p-5 bg-blue-500 rounded-full text-white text-center w-1/6 cursor-pointer"
        onClick={signIn}
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;


