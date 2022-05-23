import Styled from "styled-components";

const Container = Styled.header`
    width: 100%;
    position: relative;

    background: ${(props) => props.theme.neutralColors.dark};
    
    h1 {
        color: ${(props) => props.theme.colors.blue};
    }
    h2, h3 {
        color: ${(props) => props.theme.neutralColors.light};
    }

    nav{
        color: ${(props) => props.theme.neutralColors.light};
        padding: 2rem 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ul{
            display: flex;
            align-items: center;
            list-style: none;
            gap: 3rem;
        }
        a{
            color: ${(props) => props.theme.colors.light};
            text-decoration: none;
            font-size: 2rem;
            font-weight: bold;
            padding: 0 2rem;

        }
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
        nav {
            flex-direction: column;
            ul {
                flex-direction: column;
            }
        }
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
    width: 100%;
    position: relative;
    @media (max-width: 1079px) {
        
    }

    @media (max-width: 1024px) {
        height: 50vh;
    }

    @media (max-width: 768px) {
        
    }
`;

const Presentetion = Styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding-left: 6rem;
    z-index: 1;
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
