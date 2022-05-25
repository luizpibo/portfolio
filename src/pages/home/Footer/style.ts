import Styled from "styled-components";

const FooterContainer = Styled.footer`
    background-color: ${props => props.theme.neutralColors.dark};
    padding: 2rem 7rem;
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.neutralColors.light};
`;

export { FooterContainer };
