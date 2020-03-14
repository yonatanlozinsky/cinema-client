import React, { ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField';

interface IProps {
    label: string;
    onChange: (e: ChangeEvent) => void;
    value?: string;
    name?: string;
    error?: boolean;
};

const Input = (props: IProps) => {
    const { value, onChange, name, label, error } = props;
    return (
        <TextField
            name={name}
            color={error ? 'secondary' : 'primary'}
            onChange={onChange}
            label={label}
            value={value}
        />
    );
};

export default Input;
