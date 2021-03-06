import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  margin: 130px auto;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  h4 {
    color: #03045e;
    font-size: 30px;
    margin: 10px auto;
    text-align: center;
  }
  img {
    width: 200px;
  }

  button {
    margin-top: 1rem;
    width: 150px;
    height: 40px;
    font-weight: bolder;
    background-color: #03045e;
    border: none;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: transparent;
      border: 2px solid #03045e;
      color: #03045e;
    }
  }
  @media (min-width: 800px) {
    justify-content: center;
    margin: 0 auto;
  }
`;
