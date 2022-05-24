import Styled from "styled-components";

const ContainerAbout = Styled.section`
    padding: 3rem 7rem;
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    justify-content: center;
    background-color: ${(props) => props.theme.neutralColors.dark200};
    color: ${(props) => props.theme.neutralColors.light};
    @media (max-width : 768px) {
        gap: 2rem;
        padding: 3rem 1rem;
        grid-template: 1fr 1fr / 1fr;
    }
`;

const ImageContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 50%;
        border-left: 0.4rem solid ${(props) => props.theme.colors.blue};
        border-radius: 0.2rem;
        height: fit-content;
    }
    @media (max-width : 768px) {
        img {
            width: 100%;
        }
    }
`;
const TextContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    width: 70%;
    @media (max-width : 768px) {
        justify-content: flex-start;
        width: 100%;
    }
`;
const Buttons = Styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    gap: 3rem;
    z-index: 0;
`;

export { ContainerAbout, Buttons, ImageContainer, TextContainer };
