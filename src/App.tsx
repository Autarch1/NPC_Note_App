import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RootStackNavigators } from "./navigations/RootStackNavigators";
import {store} from 'screens/store/store'


const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        retryDelay: 1000 * 60,
        retryOnMount: true,
        refetchOnReconnect: true,
      },
    },
  });
  return (
    <NavigationContainer>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RootStackNavigators />
        </QueryClientProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
