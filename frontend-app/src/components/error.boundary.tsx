import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h1>Something went wrong...</h1>
          <p>Please try again later or contact support.</p>
          {process.env.NODE_ENV !== "production" && (
            <details style={{ whiteSpace: "pre-wrap", marginTop: "20px" }}>
              {this.state.errorInfo?.componentStack}
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
