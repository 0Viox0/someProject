import { Component, ReactNode } from 'react';
import { text } from 'shared/text/text';
import { Button } from 'components/Button';

import './ErrorBoundary.scss';

type ErrorBoundaryState = {
    hasError: boolean;
};

type ErrorBoundaryProps = {
    children?: ReactNode;
};

export class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    handleReloadPageClick() {
        window.location.reload();
    }

    handleGoToHomePage() {
        window.location.href = '/';
    }

    render(): ReactNode {
        if (this.state.hasError) {
            return (
                <div className="errorBoundaryWrapper">
                    <h2 className="errorBoundaryHeader">
                        {text.ERROR_BOUNDARY_PAGE.somethingWentWrong}
                    </h2>
                    <p className="errorBoundarySecondaryText">
                        {text.ERROR_BOUNDARY_PAGE.someUnexpectedErrorHasOccured}
                    </p>
                    <div className="errorBoundaryButtonsWrapper">
                        <Button
                            theme="info"
                            onClick={this.handleReloadPageClick}
                        >
                            {text.ERROR_BOUNDARY_PAGE.reloadThePage}
                        </Button>
                        <Button onClick={this.handleGoToHomePage}>
                            {text.ERROR_BOUNDARY_PAGE.goToHomePage}
                        </Button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
