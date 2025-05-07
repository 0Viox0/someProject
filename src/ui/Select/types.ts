import { Ref, Dispatch } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export type OptionValue = string | number;

export type Option = {
    label: string;
    value: OptionValue;
};

export interface SelectProps extends BaseComponentProps {
    /** Currently selected value or initial value if onChange is not provided */
    selectedValue?: OptionValue;
    /** Optional function to react to change events*/
    onChange?: (newValue: OptionValue) => void;
    /** Select options */
    options?: Option[];
    /** Sets the select component into disabled state */
    disabled?: boolean;
    /** Some additional classes */
    className?: string;
}

export interface OptionProps extends BaseComponentProps {
    option: Option;
    onClick: (newValue: OptionValue) => void;
    selectedValue: OptionValue;
    ref?: Ref<HTMLLIElement>;
}

export interface TriggerProps
    extends Pick<SelectProps, 'size' | 'theme' | 'selectedValue' | 'options'> {
    inputValue: string;
    setInputValue: Dispatch<React.SetStateAction<string>>;
    isExpanded: boolean;
    disabled: boolean;
    toggleExpandSelect: () => void;
}
