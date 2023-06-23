import { NativeBaseProvider } from "native-base";
import { Provider } from 'react-redux';
import { store } from './src/state/store';
import Main from "./src/navigation/main";

const App = () => {

  return (
    <Provider store={store}>
      <NativeBaseProvider >
        <Main/>
      </NativeBaseProvider>
    </Provider>
  )
}

export default App
