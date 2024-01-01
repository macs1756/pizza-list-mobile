
import HomeScreen from './screens/Home'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Catalog from './screens/Catalog';
import Single from './screens/Single';


export default function App() {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Greeting" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Catalog" component={Catalog} options={{ title: 'Каталог' }} />
        <Stack.Screen name="Single" component={Single} options={{ title: 'Підтвердження' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


