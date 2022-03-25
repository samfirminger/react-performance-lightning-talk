import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Container } from "./Container";
import GrandChild from "./GrandChild";

const ChildContainer = styled(Container)`
  margin-top: 50px;
  background-color: #b3dec1;
`;

const Child = () => {
  const renderCount = useRef(1);
  useEffect(() => {
    renderCount.current++;
  });

  return (
    <div>
      <ChildContainer>
        I am a child and I've rendered {renderCount.current} time(s)
      </ChildContainer>
      <GrandChild />
    </div>
  );
};

export default Child;
