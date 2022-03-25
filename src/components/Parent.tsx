import React, { useState } from "react";
import styled from "styled-components";
import Child from "./Child";
import { Container } from "./Container";

const ParentContent = styled(Container)`
  margin-top: 500px;
  background-color: #E5FCF5;
  color: #210124;
`;

const Button = styled.button`
  background: none;
  border-radius: 4px;
  padding: 15px;
  cursor: pointer;
`

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <ParentContent>
        <h1>I am the parent</h1>
        <Button onClick={() => setCount(count + 1)}>Click me!</Button>
      </ParentContent>
      <Child />
    </>
  );
};

export default Parent;
