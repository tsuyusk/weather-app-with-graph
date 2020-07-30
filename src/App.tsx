import React, { useState, useEffect } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import darkTheme from "./Global/themes/darkTheme";
import lightTheme from "./Global/themes/lightTheme";
import { GlobalCss } from "./Global/GlobalCss";
import Home from "./Pages/Home";

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    if (currentHour >= 6 && currentHour < 18) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalCss />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
