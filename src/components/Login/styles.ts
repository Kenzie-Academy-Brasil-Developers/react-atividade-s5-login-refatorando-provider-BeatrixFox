import styled from "styled-components";

export const Form = styled.form`
  width: 275px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 80px 0 40px;
  background-color: #959595;
  box-shadow: 10px 15px 5px rgba(0, 0, 0, 0.5);

  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 14px;
    }
    input {
      border: 1px solid #959595;
      border-radius: 5px;
      height: 30px;
      margin: 1rem;
      padding-left: 10px;
    }
    button {
      width: 150px;
      height: 40px;
      margin-top: 1rem;
      border-radius: 10px;
      background-color: #b39a2d;
      border: 2px solid #959595;
      cursor: pointer;
      color: #181818;
      &:hover {
        background-color: transparent;
        border: 2px solid #b39a2d;
        color: #fff;
      }
    }
  }

  @media (min-width: 420px) {
    width: 300px;
  }
`;
