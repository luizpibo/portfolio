import Styled from "styled-components";

const Container = Styled.header`
    background: ${(props) => props.theme.neutralColors.dark};
    overflow: hidden;
    width: 100%;
    
    h1 {
        color: ${(props) => props.theme.colors.blue};
    }
    h2, h3 {
        color: ${(props) => props.theme.neutralColors.light};
    }

    @media (min-width: 1079px) {
        h1 {
            font-size: 7rem;
        }
        h2, h3 {
            font-size: 4rem;
            line-height: 5rem;
            color: ${(props) => props.theme.neutralColors.light};
        }
    }

    @media (max-width: 1920px) {
        h1 {
            font-size: 5rem;
        }
        h2, h3 {
            font-size: 2.5rem;
            line-height: 5rem;
            color: ${(props) => props.theme.neutralColors.light};
        }
    }

    @media (max-width: 1440px) {
        h1 {
            font-size: 2.5rem;
        }
        h2, h3 {
            font-size: 1.7rem;
            line-height: 5rem;
            color: ${(props) => props.theme.neutralColors.light};
        }
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2.2rem;
        }
        h2, h3 {
            font-size: 1.2rem;
            line-height: 4rem;
            color: ${(props) => props.theme.neutralColors.light};
        }
    }
`;

const Wrapper = Styled.div`
    display: flex;
    overflow: hidden;
    width: 100%;
    position: relative;
    padding: 5rem 0;

    @media (max-width: 1024px) {
        min-height: 40vh;
    }
`;

const Presentetion = Styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding-left: 6rem;
    @media (max-width: 768px) {
        padding: 0;
        align-items: center;
    }
`;

const Buttons = Styled.div`
    display: flex;
    gap: 3rem;
`;

export { Container, Wrapper, Presentetion, Buttons };
