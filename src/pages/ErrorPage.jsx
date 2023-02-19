import React from 'react';

const ErrorPage = () => (
  <div className="h-screen flex items-center justify-center">
    <div className="bg-red-500 text-white p-10 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold">Oops! Something went wrong.</h1>
      <p className="text-xl mt-5">We're sorry but there was an error processing your request.</p>
      <p className="text-xl mt-5">Please try again later or contact support if the problem persists.</p>
    </div>
  </div>
);

export default ErrorPage;
