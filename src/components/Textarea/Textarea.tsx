import { FC } from 'react';
import { TextareaProps } from './types';
import classNames from 'classnames';

import './Textarea.scss';

export const Textarea: FC<TextareaProps> = ({
    theme = 'secondary',
    className,
    ...props
}) => {
    return (
        <textarea
            className={classNames('textarea', `textarea-${theme}`, className)}
            {...props}
        ></textarea>
    );
};
