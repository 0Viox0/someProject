import { text } from 'shared/text/text';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router';

import './Home.scss';

export const Home = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/users');
    };

    return (
        <div className="homePage">
            <h2 className="homePageHeader">{text.HOME_PAGE.pageHeading}</h2>
            <div className="additionalInfo">
                <p>{text.HOME_PAGE.info}</p>
                <p className="lowerText">{text.HOME_PAGE.youCanStartWith}</p>
            </div>
            <Button onClick={handleButtonClick} className="actionButton">
                {text.HOME_PAGE.goToUser}
            </Button>
        </div>
    );
};
