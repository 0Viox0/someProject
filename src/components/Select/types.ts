import { Ref, Dispatch } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export type OptionValue = string | number;

export type Option = {
    label: string;
    value: OptionValue;
};

export interface SelectProps extends BaseComponentProps {
    selectedValue?: OptionValue;
    onChange?: (newValue: OptionValue) => void;
    options?: Option[];
    disabled?: boolean;
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
    toggleExpandSelect: () => void;
}
