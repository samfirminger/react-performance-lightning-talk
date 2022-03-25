import React, { Profiler, useState } from "react";
import styled from "styled-components";
import Child from "./Child";
import { Container } from "./Container";

const ParentContent = styled(Container)`
  margin-top: 500px;
  background-color: #e5fcf5;
  color: #210124;
`;

const Button = styled.button`
  background: none;
  border-radius: 4px;
  padding: 15px;
  cursor: pointer;
`;

const Parent = () => {
  const [count, setCount] = useState(0);

  const clockPerformance = (
    profilerId: any,
    mode: any,
    actualTime: any,
    baseTime: any,
    startTime: any,
    commitTime: any
  ) => {
    console.log({
      mode,
      actualTime,
      baseTime,
    });
  };

  return (
    <Profiler
      id={"test"}
      onRender={clockPerformance}
    >
      <ParentContent>
        <h1>I am the parent</h1>
        <Button onClick={() => setCount(count + 1)}>Click me!</Button>
      </ParentContent>
      <Child />
    </Profiler>
  );
};

export default Parent;
