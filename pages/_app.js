import React from 'react';
import { store } from "../app/store";
import { Provider } from "react-redux";

import '../styles/materialize.css';
import '../styles/animate.css';
import '../styles/fonts.css';
import '../styles/global.css';
import '../styles/glider.css';

function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.StrictMode>
  )
}

export default App;