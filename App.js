import { createSwitchNavigator, createAppContainer } from 'react-navigation';

// import the different screens
import LoadingScreen from './screens/Loading';
import SignupScreen from './screens/Signup';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
// create our app's navigation stack
const App = createSwitchNavigator(
  {
    Loading: {screen: LoadingScreen},
    Signup: {screen: SignupScreen},
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
  },
  {
    initialRouteName: 'Loading'
  },
)
export default createAppContainer(App);


