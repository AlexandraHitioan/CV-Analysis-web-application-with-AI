import React from 'react';
import {
    ModalHeader,
    ModalDescription,
    ModalContent,
    ModalActions,
    Button,
    Modal,
} from 'semantic-ui-react'


export interface ModalFormProps {
    modalTitle: string;
    form: any;
    open: boolean;
    setOpen: any;
    style: any
}

function FormModal(props: ModalFormProps) {

    return (
        <Modal
            onClose={() => props.setOpen(false)}
            onOpen={() => props.setOpen(true)}
            open={props.open}
            style={{width: "20vw"}}
        >
            <ModalHeader>{props.modalTitle}</ModalHeader>
            <ModalContent image>
                <div>
                    {props.form}
                </div>
            </ModalContent>
            <ModalActions>
                <Button onClick={() => props.setOpen(false)}>Done!</Button>
            </ModalActions>
        </Modal>
    )
}

export default FormModal
