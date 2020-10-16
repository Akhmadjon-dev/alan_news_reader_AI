import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import userEvent from "@testing-library/user-event";
const alanKey =
  "13b55580cde21096a19cd9786a329b732e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("this code was excuted");
        }
      },
    });
  }, []);
  return (
    <div>
      <h2>Alan ai</h2>
    </div>
  );
};

export default App;
