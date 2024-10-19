import React, { useRef, useState } from "react";
import Container from "./components/Container";
import { GlobalStyles } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import CardProducts from "./components/CardProducts";
import CardPrice from "./components/CardPrice";
import { ContextProvider } from "./contextProvider";
import { fetcher, key } from "./fetchAPI/fetch";
import { data } from "autoprefixer";
import useSWR from "swr";
// json-server --watch db.json

const App = () => {
  const [dataValue, setDataValue] = useState([]);
  const [sumPrices, setSumPrice] = useState(0);
  const [quantityProduct, setQuantityProduct] = useState({});
  const [checkClickbtn, setCheckClickbtn] = useState([]);
  const { data } = useSWR(key, fetcher);
  if (!data) return;

  const value = {
    data,
    setDataValue,
    sumPrices,
    setSumPrice,
    checkClickbtn,
    setCheckClickbtn,
    dataValue,
    quantityProduct,
    setQuantityProduct,
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles></GlobalStyles>
        <Container>
          <ContextProvider value={{ ...value }}>
            <CardProducts></CardProducts>
            <CardPrice></CardPrice>
          </ContextProvider>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
