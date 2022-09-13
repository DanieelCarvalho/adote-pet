import React, { useState } from "react";
import axios from "axios";
import * as S from "./Style/Style";

const Dogs = () => {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);

  const API = "https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng&api_key=live_FQSinfoFXQOByYlHASPpuxgTkaAJ4LrebOtGbSGZP8iO1LkYAIkti8f4ROSTRWWh";

  const DogsApi = () => {
    axios
      .get(API)  
      .then((resposta) => {
        setData(resposta.data[0].url);
        

        console.log(data);
      })
      .catch((error) => {
        console.log("Desculpe aconteceu um erro na requisição", error);
      })
      if(!open){
        setOpen(!open)
     }
  };

  /* const Mostrar = () => {
        setOpen(!open)
    }
 */
  return (
    <S.CaixaAdote>
      <S.Caixa>
      <S.H2>Encontre o seu novo amigo gato</S.H2>
      <S.Button
        onClick={() => {
          DogsApi();
        }}>
        Clique Aqui
      </S.Button>
      </S.Caixa>
      {open && <S.Foto src={data} alt="Fotos" />}
      
    </S.CaixaAdote>
  );
};

export default Dogs;
