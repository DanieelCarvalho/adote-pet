import React, { useState } from "react";
import catDog from "../Routes/img/catDog.png"
import * as S from "./Style/Style";

function Home(){
    return(
        <div>
            <S.Titulo>Bem vindo(a) ao Melhor Amigo Do Dono.</S.Titulo>
            <S.ParagrafoHome>Não se compra um amigo! Adote um pet com a gente.</S.ParagrafoHome>
            <S.Figure>
                <S.CatDog src={catDog} alt="oi"/>
            </S.Figure>
        </div>
    )
}

export default Home