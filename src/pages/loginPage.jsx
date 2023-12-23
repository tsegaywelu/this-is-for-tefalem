import React from "react";

const LoginPage = () => {
  return (
    <div className="mt-3">
      <h1 className="text-4xl text-center mb-4">log in</h1>
      <form className="max-w-md mx-auto">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>log in</button>
      </form>
    </div>
  );
};

export default LoginPage;
