import React from 'react';

import * as S from "./App.styles";

import InputForm from "./component/InputForm";
import TodoList from "./component/TodoList";


function App() {
  return (
      <S.Container>
        <S.Wrapper>
          <h1> hi </h1>
          <InputForm />
          <TodoList />
        </S.Wrapper>
      </S.Container>
  );
}


export default App;

