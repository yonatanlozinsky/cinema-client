import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
};

const Modal: React.FC<IProps> = (props)  => {
    const { isOpen, onClose, title, children } = props;
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>
                { title }
            </DialogTitle>
            <DialogContent>
                { children }
            </DialogContent>
        </Dialog>
    );
};

export default Modal;
