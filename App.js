import { Provider } from 'react-redux';
import store from './store'
import Home from './components/Home';
import { LogBox } from 'react-native'

LogBox.ignoreAllLogs()

export default function App() {
  return (
    <Provider store = {store}>
      <Home />
    </Provider>
  )
}