import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";

import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";

import Container from "./Container";
import Card from "./Card";
import Button from "./Button";

const App = () => {
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Card>
          Dark Mode is Disabled
          <Button
            onClick={() => {
              setIsDarkMode(!isDarkMode);
              localStorage.setItem("isDarkMode", !isDarkMode);
            }}
          >
            Toggle Dark Mode
          </Button>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;
