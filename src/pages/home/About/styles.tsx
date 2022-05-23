import Styled from "styled-components";

const Container = Styled.section`
    padding: 3rem 7rem;
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    justify-content: center;
    background-color: ${(props) => props.theme.neutralColors.dark200};
    color: ${(props) => props.theme.neutralColors.light};
`;

const ImageContainer = Styled.div`
    display: flex;
    justify-content: center;
    img {
        width: 50%;
        border-left: 0.4rem solid ${(props) => props.theme.colors.blue};
        border-radius: 0.2rem;
    }
`;
const TextContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    width: 70%;
`;
const Buttons = Styled.div`
    display: flex;
    gap: 3rem;
`;

export { Container, Buttons, ImageContainer, TextContainer };
