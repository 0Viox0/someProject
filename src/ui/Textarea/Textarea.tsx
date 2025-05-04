import { FC } from 'react';
import { TextareaProps } from './types';
import classNames from 'classnames';

import './Textarea.scss';

export const Textarea: FC<TextareaProps> = ({
    theme = 'secondary',
    className,
    error,
    ...props
}) => {
    return (
        <div className={className}>
            <textarea
                className={classNames('textarea', `textarea-${theme}`)}
                {...props}
            ></textarea>
            <span className="error">{error}</span>
        </div>
    );
};
