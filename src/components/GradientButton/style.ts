import styled from "styled-components";

const Container = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.neutralColors.light};
  display: flex;
  position: relative;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  min-width: 8rem;
  padding: 0.5rem;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.neutralColors.dark};
  
  &:after {
    content: "";
    position: absolute;
    border-radius: 0.5rem;
    padding: 0.15rem;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: ${(props) =>
      props.color == "pink"
        ? props.theme.colors.gradientPink
        : props.theme.colors.gradientPurple};
  }
`;

export { Container };
