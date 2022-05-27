import Styled from "styled-components";

const Container = Styled.header`
    background: ${(props) => props.theme.neutralColors.dark};
    overflow: hidden;
    width: 100%;
    color: ${(props) => props.theme.neutralColors.light};

    h1 {
        color: ${(props) => props.theme.colors.blue};
    }

    @media (min-width: 1920px) {
        h1 {
            font-size: 6rem;
        }
        h2, h3, h4 {
            font-size: 3rem;
            line-height: 5rem;
        }
    }
    
    @media (max-width: 1920px) {
        h1 {
            font-size: 4rem;
        }
        h2, h3, h4 {
            font-size: 2.5rem;
            line-height: 5rem;
        }
    }

    @media (max-width: 1440px) {
        h1 {
            font-size: 2.5rem;
        }
        h2, h3, h4 {
            font-size: 1.7rem;
            line-height: 5rem;
        }
    }

    @media (max-width: 950px) {
        h1 {
            font-size: 2rem;
            text-align: center;
        }
        h2, h3, h4 {
            font-size: 1.2rem;
            line-height: 4rem;
        }
    }
`;

const Wrapper = Styled.div`
    display: flex;
    width: 100%;
    position: relative;
    padding: 5rem 0;
    @media (min-width: 1024px){
        min-height: 20rem;
    }

    @media (max-width: 950px) {
        min-height: 35rem;
    }
`;

const Presentetion = Styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding-left: 6rem;
    z-index: 1;
    @media (max-width: 950px) {
        padding: 0;
        align-items: center;
    }
`;

const Buttons = Styled.div`
    display: flex;
    gap: 3rem;
`;

export { Container, Wrapper, Presentetion, Buttons };
