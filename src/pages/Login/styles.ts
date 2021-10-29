import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  margin: 130px auto;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 200px;
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
  @media (min-width: 800px) {
    justify-content: center;
    margin: 0 auto;
  }
`;
