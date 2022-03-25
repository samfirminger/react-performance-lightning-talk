import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Container } from "./Container";
import GrandChild from "./GrandChild";

const ChildContainer = styled(Container)`
  margin-top: 50px;
  background-color: #b3dec1;
`;

const Content = styled.div`
  display: block;

  &:first-child {
    margin-bottom: 20px;
  }
`;

const Child = () => {
  const renderCount = useRef(1);
  useEffect(() => {
    renderCount.current++;
  });

  const doLongAndExpensiveCalculation = (size: number) => {
    const array = [];
    for (let i = 0; i < size; i++) {
      array.push(i);
    }
    return array[size - 1];
  };

  return (
    <div>
      <ChildContainer>
        <Content>
          I am a functional component child and I've rendered{" "}
          {renderCount.current} time(s)
        </Content>
        <Content>
          The result of my expensive calc is:{" "}
          {doLongAndExpensiveCalculation(10000000)}
        </Content>
      </ChildContainer>
      <GrandChild />
    </div>
  );
};

export default Child;
