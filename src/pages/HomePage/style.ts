import styled from "styled-components";

export const HomePageContainer = styled.header`
  width: 100%;
  height: 100vh;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.success};
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
