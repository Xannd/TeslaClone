import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    flex:1;
`;

export const Heading = styled.div`
    margin-top:16.5vh;
    text-align:center;

    > h1 {
        font-weight: 500;
        /* text-shadow: .5px .5px 10px #000; */
        text-shadow: 2px 2px 3px rgba(0,0,0,0.8); 
        font-size: 40px;
        line-height: 48px;
        color: #fff;
    }
    > h2 {
        font-weight: normal;
        text-shadow:1px 1px 3px #000;
        font-size: 14px;
        line-height: 20px;
        color: #fff;
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;

    margin-top:130px;

    > button {
        background:#1a1720;
        color:#fff;
        opacity: 0.8;

        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.4px;
        text-transform: uppercase;

        padding:13px 40px ;
        border-radius:15px;
        border:none;
        outline: 0;
        cursor: pointer;

        &.white{
            background: #fff;
            color: #1a1720;
            opacity:0.65;
        }

        & + button {
                margin:10px 0 0 ;
        }
    }

    @media (min-width: 600px){
        flex-direction: row;
        margin-bottom:90px;

        > button + button{
            margin: 0 0 0 10px;
        }
    }
`;
