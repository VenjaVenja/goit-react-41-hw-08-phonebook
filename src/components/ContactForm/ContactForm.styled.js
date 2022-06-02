import styled from '@emotion/styled';

export const Form = styled.form`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const Text = styled.span`
  font-weight: 300px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  height: 40px;
  width: 300px;
  padding: 0 10px 0 10px;
  &::placeholder {
    font-size: 12px;
    color: blue;
  }
`;

export const AddContactBtn = styled.button`
  /* display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 40px;

  background-color: #4b4b4b;
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 4px;

  cursor: pointer;
  /* backgroundColor: #4b4b4b; */
  /* transition: background-color var(--main-hover-animation); */

  display: flex;
  align-items: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  padding: 0.7em 1.4em 0.7em 1.4em;
  color: white;
  background: #ad5389;
  background: linear-gradient(
    0deg,
    rgba(20, 167, 62, 1) 0%,
    rgba(102, 247, 113, 1) 100%
  );
  border: none;
  box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
  letter-spacing: 0.05em;
  border-radius: 20em;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
  }

  &:active {
    box-shadow: 0 0.3em 1em -0.5em #14a73e98;
  }
`;
