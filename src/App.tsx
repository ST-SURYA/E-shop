import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./routes/AppRoutes";
import theme from "./styles/theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
