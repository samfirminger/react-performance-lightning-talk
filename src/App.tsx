import React from "react";
import Parent from "./components/Parent";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <AppContainer>
        <Parent />
      </AppContainer>
    </div>
  );
}

export default App;
