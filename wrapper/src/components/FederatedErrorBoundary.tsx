import { Component, ReactNode } from "react";
import { ErrorPage } from "../routes";

export class FederatedErrorBoundary extends Component<
  {
    children: ReactNode;
  },
  {
    hasError: boolean;
    error?: Error;
  }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): {
    hasError: boolean;
    error?: Error;
  } {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("Federated module error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPage
          type="module-error"
          message="The current module failed to load. This could be due to network issues or the module being temporarily unavailable."
        />
      );
    }

    return this.props.children;
  }
}
