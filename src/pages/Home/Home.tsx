import somePicturePng from 'shared/assets/time.png';
import somePictureJpg from 'shared/assets/userBox.jpg';
import CheckIcon from 'shared/assets/Done.svg';
import { useEffect, useState } from 'react';

import './Home.scss';

export const Home = () => {
    const [someState, setSomeState] = useState(2);

    useEffect(() => {
        if (someState) {
            console.log('hello');
        }
    }, [someState]);

    return (
        <div>
            <span className="text">Home</span>
            <img src={somePicturePng} alt="" />
            <img src={somePictureJpg} alt="" />
            <CheckIcon className="icon" width={50} height={50} />
            <button
                onClick={() => {
                    setSomeState(4);
                }}
            >
                Some button
            </button>
        </div>
    );
};
