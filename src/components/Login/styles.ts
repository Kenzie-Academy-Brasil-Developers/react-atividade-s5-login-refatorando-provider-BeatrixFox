import styled from "styled-components";

export const Form = styled.form`
  width: 275px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 80px 0 40px;
  background-color: #03045e;
  box-shadow: 10px 15px 5px rgba(0, 0, 0, 0.5);
  input {
    border: 1px solid #959595;
    border-radius: 5px;
    height: 30px;
    width: 80%;
    margin: 1rem;
    padding-left: 10px;
  }
  p {
    color: #caf0f8;
    margin: 0 auto;
  }
  button {
    width: 150px;
    height: 40px;
    margin-top: 1rem;
    border-radius: 10px;
    background-color: #90e0ef;
    border: 5px solid transparent;
    cursor: pointer;
    color: #181818;
    &:hover {
      background-color: transparent;
      border: 5px solid #90e0ef;
      color: #fff;
    }
  }

  @media (min-width: 420px) {
    width: 300px;
  }
`;
