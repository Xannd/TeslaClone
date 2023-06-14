import { motion } from 'framer-motion';
import styled from 'styled-components';
import { LogoSVG, BurgerSVG} from './IconSVG';


export const Container = styled.div`

`

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding:0 35px;
    min-height:52px;
`

// export const Logo = styled.img.attrs({
//     src: './assets/images/logotij1.png'
// })`
//     height: 85px;
//     cursor:pointer;
// `


export const Logo = styled.h1`
    font-size: 18px;
    color: #fff;
`

export const Burguer  = styled(BurgerSVG)`
    width: 24px;
    height: 24px;
    cursor:pointer;

    padding-right: 5px;
`

export const Footer = styled(motion.footer)`
    position:fixed;
    bottom: 0;
    right: 0;
    left: 0;

    ul{
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content:center; 

        li {
            list-style: none;

            font-size: 14px;

          & + li {
            margin-top:10px 0 0;
          }  

          a {
              text-decoration: none;
              color: #393c41;

              &:hover {
                  color:#000;
              }
          }
        }
    }

    margin-bottom:30px;

    @media (min-width: 600px){
        margin-bottom:38px;

        ul {
            flex-direction:row;

            li + li {
                margin: 0 0 0 30px;
            }
        }
    }
`

