import styled from '@emotion/styled';

export const Form = styled.form`
  margin-top: 40px;
  margin-bottom: 50px;
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
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: #fff;
  }

  &:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }

  @media (min-width: 768px) {
    min-width: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
