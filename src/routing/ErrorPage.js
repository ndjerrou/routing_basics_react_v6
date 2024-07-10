import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  console.log(isRouteErrorResponse(error));

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
