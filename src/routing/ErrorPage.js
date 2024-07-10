import React, { useEffect } from 'react';
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  console.log(isRouteErrorResponse(error));

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, []);

  return (
    <div>
      <h1>ErrorPage</h1>
      {isRouteErrorResponse(error) ? (
        <p>Invalid page</p>
      ) : (
        <p>Something went wrong</p>
      )}
    </div>
  );
}

export default ErrorPage;
