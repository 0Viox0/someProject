import { useNavigate } from 'react-router';
import { text } from 'shared/text';
import { Button } from 'ui';

import './NotFoundContent.scss';

export const NotFoundContent = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };
    return (
        <div className="notFoundPageWrapper">
            <div className="notFoundHeading">
                {text.NOT_FOUND_PAGE.thisPageWas}
            </div>
            <Button onClick={handleGoHome}>
                {text.ERROR_BOUNDARY_PAGE.goToHomePage}
            </Button>
        </div>
    );
};
