import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Container } from "./Container";

const ChildContainer = styled(Container)`
  margin-top: 50px;
  background-color: #b3dec1;
`;

const GrandChild = () => {
    const renderCount = useRef(1);
    useEffect(() => {
        renderCount.current++;
    });

    return (
        <ChildContainer>
            I am a grandchild and I've rendered {renderCount.current} time(s)
        </ChildContainer>
    );
};

export default GrandChild;
