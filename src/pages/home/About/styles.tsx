import Styled from "styled-components";

const ContainerAbout = Styled.section`
    
    background-color: ${(props) => props.theme.neutralColors.dark200};
    color: ${(props) => props.theme.neutralColors.light};
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    justify-content: center;
    padding: 3rem 7rem;
    box-shadow: 0 0 1rem 0 rgba(0,0,0,0.75);

    @media (max-width : 768px) {
        gap: 2rem;
        padding: 3rem 1rem;
        grid-template: 1fr 1fr / 1fr;
    }
`;

const ImageContainer = Styled.div`
    flex: 1;
    img {
        border-left: 0.4rem solid ${(props) => props.theme.colors.blue};
        border-radius: 0.2rem;
        width: 70%;
    }
    @media (max-width : 768px) {
        width: 100%;
    }
`;
const TextContainer = Styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    width: 70%;

    @media (max-width : 768px) {
        justify-content: flex-start;
        width: 100%;
    }
`;
const Buttons = Styled.div`
    align-items: center;
    display: flex;
    gap: 3rem;
    justify-content: space-evenly;
    width: 100%;
`;

export { ContainerAbout, Buttons, ImageContainer, TextContainer };
