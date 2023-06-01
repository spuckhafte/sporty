import { SafeAreaView } from 'react-native-safe-area-context'
import { Provider } from 'react-redux';
import TopBar from './components/Topbar/Topbar';
import store from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <TopBar />
      </SafeAreaView>
    </Provider>
  );
}