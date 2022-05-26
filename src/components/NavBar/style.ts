import styled from "styled-components";

const HeaderContainer = styled.nav`
  * {
    color: ${(props) => props.theme.neutralColors.light};
  }

  align-items: center;
  backdrop-filter: blur(13.5px);
  display: flex;
  justify-content: flex-end;
  padding: 2rem 5rem;
  position: fixed;
  width: 100%;
  -webkit-backdrop-filter: blur(13.5px);
  z-index: 3;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 3rem;
  }
  a {
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0 2rem;
  }
  @media (max-width: 768px) {
    /* flex-direction: column; */
    li{
      padding: 1rem 0;
    }
    padding: 0 1.5rem;
    ul {
      overflow-x: scroll;
      /* flex-direction: column; */
    }
  }
`;

export { HeaderContainer };
