import React, { FunctionComponent } from 'react';
import { ConfirmationButtons, Message, OKButton, CancelButton } from './modal-confirm.style';
interface ConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}
export const ConfirmationModal: FunctionComponent<ConfirmationModalProps> = (props) => {
  return (
    <React.Fragment>
      <Message>{props.message}</Message>
      <ConfirmationButtons>
        <OKButton onClick={props.onConfirm}>OK</OKButton>
        <CancelButton onClick={props.onCancel}>Cancel</CancelButton>
      </ConfirmationButtons>
    </React.Fragment>
  );
};