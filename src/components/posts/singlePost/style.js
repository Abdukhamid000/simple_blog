import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  min-height: 100px;
  overflow: hidden;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  margin-top: 20px;
  background: #ece9e6;
  background: linear-gradient(to right, #ffffff, #ece9e6);
  position: relative;

  span {
    position: absolute;
    right: 20px;
    display: none;
  }

  &:hover {
    span {
      display: block;
    }
  }

  a {
    text-decoration: none;
    font-size: 28px;
  }

  p {
    font-size: 17px;
  }
`;
