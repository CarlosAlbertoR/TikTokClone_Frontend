import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import AppRoutes from "./routes/AppRoutes";
import { persistor, store } from "./store";
import theme, { GlobalStyles } from "./theme";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Layout>
              <AppRoutes />
            </Layout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
