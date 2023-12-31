
import HomeScreen from './screens/Home'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Catalog from './screens/Catalog';


export default function App() {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Greeting" component={HomeScreen} />
        <Stack.Screen name="Catalog" component={Catalog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


