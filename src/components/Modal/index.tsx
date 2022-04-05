import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop,
} from './modal.style';
import FocusLock from 'react-focus-lock';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}
export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === 27 && isShown) {
        hide();
      }
    };
    isShown ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');
    document.addEventListener('keydown', onKeyDown, false);
    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  }, [isShown, hide]);

  const modal = (
    <React.Fragment>
      <Backdrop onClick={hide} />
      <FocusLock>
      <Wrapper aria-modal aria-labelledby={headerText} tabIndex={-1} role="dialog">
        <StyledModal>
          <Header>
            <HeaderText>{headerText}</HeaderText>
            <CloseButton aria-label="Close" onClick={hide}>X</CloseButton>
          </Header>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper>
      </FocusLock>
    </React.Fragment>
  );
  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
