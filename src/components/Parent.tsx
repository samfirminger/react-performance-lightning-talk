import React, { Profiler, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Child from "./Child";
import { Container } from "./Container";

const ParentContent = styled(Container)`
  margin-top: 150px;
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
  const [buttonClickCount, setButtonClickCount] = useState(0);

  const inputRef = useRef<HTMLButtonElement>(null);
  const numberOfClicks = useRef(0);
  const rerenderTimeSum = useRef(0);
  const loopCount = useRef(0);
  const numberOfLoops = 10;

  const clockPerformance = (
    profilerId: any,
    mode: any,
    actualTime: any,
    baseTime: any,
    _startTime: any,
    _commitTime: any
  ) => {
    console.log({
      mode,
      actualTime,
      baseTime,
    });

    // if (mode !== "mount") {
    //   rerenderTimeSum.current = rerenderTimeSum.current + actualTime;
    //   if (loopCount.current === numberOfLoops) {
    //     console.log(rerenderTimeSum.current / loopCount.current);
    //   }
    // }
  };

  // Uncomment if you want to simulate clicks
  /*useEffect(() => {
        if (
          inputRef &&
          inputRef.current &&
          numberOfClicks.current < numberOfLoops
        ) {
          inputRef.current.click();
          numberOfClicks.current++;
          loopCount.current++;
        }
      });*/

  return (
    <Profiler id={"Whole app"} onRender={clockPerformance}>
      <ParentContent>
        <h1>I am the parent</h1>
        <Button
          onClick={() => setButtonClickCount(buttonClickCount + 1)}
          ref={inputRef}
        >
          Click me!
        </Button>
      </ParentContent>
      <Child />
    </Profiler>
  );
};

export default Parent;
