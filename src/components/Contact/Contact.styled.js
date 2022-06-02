import styled from '@emotion/styled';

export const Name = styled.span`
  font-weight: 600;
  /* margin-right: 10px;  */
`;
export const Number = styled.span`
  font-weight: 700;
  margin-right: 10px;
  margin-left: 10px;
`;
export const ContactItem = styled.p`
  /* margin-right: 15px; */

  margin-bottom: 10px;
`;
export const DeleteBtn = styled.button`
  /* display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  border-radius: 4px;
  height: 30px;
  /* padding: 10px; */

  /* border: none;
  background-color: #4b4b4b;
  color: white;

  cursor: pointer;
  &:disabled {
    background-color: #bf381d;
  } */
  margin-left: auto;

  background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;

  &:not([disabled]):focus {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }

  &:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }
`;
