import { text } from 'shared/text/text';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router';

import './NotFoundPage.scss';

export const NotFoundPage = () => {
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
