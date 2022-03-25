import React from "react";
import styled from "styled-components";
import { Container } from "./Container";

const ChildContainer = styled(Container)`
  margin-top: 50px;
  background-color: #B3DEC1;
`;

const Child = () => <ChildContainer>I am a child</ChildContainer>;

export default Child;
