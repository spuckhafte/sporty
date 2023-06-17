import { SafeAreaView } from 'react-native-safe-area-context'
import { Provider } from 'react-redux';
import TopBar from './components/Topbar/Topbar';
import store from './store/store';
import Lobby from './components/lobby/Lobby';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <TopBar />
        <Lobby />
      </SafeAreaView>
    </Provider>
  );
}