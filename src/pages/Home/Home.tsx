import { text } from 'shared/text/text';
import { Button } from 'components/Button';

import './Home.scss';
import { useNavigate } from 'react-router';

export const Home = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/users');
    };

    return (
        <div className="homePage">
            <h2 className="homePageHeader">{text.HOME_PAGE.pageHeading}</h2>
            <p className="additionalInfo">
                <div>{text.HOME_PAGE.info}</div>
                <div className="lowerText">
                    {text.HOME_PAGE.youCanStartWith}
                </div>
            </p>
            <Button onClick={handleButtonClick} className="actionButton">
                {text.HOME_PAGE.goToUser}
            </Button>
        </div>
    );
};
