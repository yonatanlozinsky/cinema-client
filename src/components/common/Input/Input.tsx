import React, { ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField';

interface IProps {
    label: string;
    onChange: (e: ChangeEvent) => void;
    value?: string;
    name?: string;
};

const Input = (props: IProps) => {
    const { value, onChange, name, label } = props;
    return <TextField name={name} color="primary" onChange={onChange} label={label} value={value} />
};

export default Input;
