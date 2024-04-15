import React, { ErrorInfo } from "react";
import "./ErrorBoundaryPage.scss";

interface ErrorBoundaryPageProps {
  errorInfo?: ErrorInfo;
}

const ErrorBoundaryPage: React.FC<ErrorBoundaryPageProps> = ({ errorInfo }) => {
  console.log("here", errorInfo?.componentStack);
  return (
    <div className="error-container">
      <h1>Something went wrong...</h1>
      <p>Please try again later...</p>

      {errorInfo?.componentStack && (
        <details className="error-message">{errorInfo?.componentStack}</details>
      )}
    </div>
  );
};

export default ErrorBoundaryPage;
