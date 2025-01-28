import { RefObject } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export type OptionValue = string | number;

export type Option = {
    label: string;
    value: OptionValue;
};

export interface SelectProps extends BaseComponentProps {
    selectedValue: OptionValue;
    onChange: (newValue: Option) => void;
    options: Option[];
    disabled?: boolean;
}

export interface DropdownProps
    extends Omit<SelectProps, 'onChange' | 'className' | 'disabled'> {
    isExpanded: boolean;
    expandedSectionRef: RefObject<HTMLDivElement>;
    handleOptionClick: (option: Option) => void;
}

export interface TriggerProps
    extends Pick<SelectProps, 'size' | 'theme' | 'selectedValue'> {
    isExpanded: boolean;
    toggleExpandSelect: () => void;
}
