import { BaseComponentProps } from 'shared/types/types';

export type OptionValue = string | number;

export type Option = {
    label: string;
    value: OptionValue;
};

export interface SelectProps extends BaseComponentProps {
    selectedValue: OptionValue;
    onChange: (newValue: OptionValue) => void;
    options: Option[];
    placeholder?: string;
    disabled?: boolean;
}
