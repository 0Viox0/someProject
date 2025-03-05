import { TextareaHTMLAttributes } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export interface TextareaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement>,
        Pick<BaseComponentProps, 'theme'> {
    className?: string;
}
