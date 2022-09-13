import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom"


export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,500;0,600;1,100;1,500&family=Mukta:wght@200;400;800&family=Open+Sans:wght@300&family=Playfair+Display:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,500;0,600;1,100;1,500&family=Mukta:wght@200;400;800&family=Open+Sans:wght@300&family=Playfair+Display:wght@700&display=swap');

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        font-family: "Merriweather", "Fira-Sans", Arial, sans-serif;
        background-color: #e9f4f8;

    }

`; 

export const Foto = styled.img`
  width: 50vw;
  height: 50vh;
  border-radius: 2%;
  @media (max-width:500px){
    width: 100%;
  }
`;

export const Caixa= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw ;
  height: 8vh;
  @media (max-width:500px) { 
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   height: 20vh;
   
  }


`
export const Button = styled.button`
  border-radius: 10px;
  border: none;
  cursor: pointer;
  width: 125px;
  height: 6vh;
  font-size: 0.75rem;
  background-color: #613387;
  color: #fff;
  font-weight: bold;
  @media (max-width:500px) { 
  
  }

`
export const H2= styled.h2`
  margin-right: 10px;

   @media (max-width:500px) { 
    font-size: 1rem;
    
  }


`
export const ParagrafoHome = styled.p`
  
`
export const Figure = styled.figure`
    width: 100%;
    display: flex;
    justify-content: center;

`

export const CatDog = styled.img`
    width: 50vw;
    height: 72vh;
    @media (max-width:500px){
      width: 100%;
      height: 69vh;
    }
`

export const Nav = styled.nav`
  width: 100%;
  height: 15vh;
  

`

export const Ul = styled.ul`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   height: 10vh;
   @media (max-width:500px){
    font-size: 0.9rem;
    
   }
 


`

export const Li = styled.li`
  list-style:none;

`

export const Menu = styled(Link)`
  color: #613387;
  text-decoration:none;
  font-weight: bold;
`

export const CaixaAdote = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`


export const Titulo = styled.h1`
  
  color:#f8a836;
  @media (max-width:500px){
    height: 13vh;
  }
`