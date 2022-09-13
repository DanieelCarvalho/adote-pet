import React from "react";
import { Link, BrowserRouter, Routes, Route} from "react-router-dom";
import Dogs from "../Components/Dogs";
import Cats from "../Components/Cats"
import Home from "../Components/Home"
import * as S from "../Components/Style/Style";


const Header = () => {
  return (
    <BrowserRouter>
    <div>
      <S.Nav>
        
        <S.Ul>
          <S.Li> 
            <S.Menu to="/">Home</S.Menu>
          </S.Li>
          <S.Li>
            <S.Menu to="/dog">Adote um Cachorro</S.Menu>
          </S.Li>
          <S.Li>
            <S.Menu to="/cat">Adote um Gato</S.Menu>
          </S.Li>
        </S.Ul>
      </S.Nav>
    </div>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/dog/" element={<Dogs />} />
  <Route path="/cat" element={<Cats/>}/>
</Routes>
</BrowserRouter>
  );
};

export default Header;
