import styled from "styled-components";

export const Container = styled.div`
  background-color: #dedede;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 200px;
  }

  button {
    margin-top: 1rem;
    width: 150px;
    height: 40px;
    font-weight: bolder;
    background-color: #959595;
    border: none;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: transparent;
      border: 2px solid #959595;
      color: #959595;
    }
  }
`;
