import styled from 'styled-components';
export const ConfirmationButtons = styled.div`
  display: flex;
  justify-content: center;
`;
export const Message = styled.div`
  font-size: 0.9rem;
  margin-bottom: 10px;
  text-align: center;
`;
export const OKButton = styled.button`
  flex: 1;
  border: none;
  border-radius: 10px;
  padding: 10px 5px;
  background-color: #2B7EFF;
  color: white;
  margin: 10px 5px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 2px 2px gray;
  }
`;
export const CancelButton = styled.button`
  flex: 1;
  border: none;
  border-radius: 10px;
  padding: 10px 5px;
  background: linear-gradient(120deg, #2B7EFF 60%, #12ECE7);
  color: white;
  margin: 10px 5px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 2px 2px gray;
  }
`;