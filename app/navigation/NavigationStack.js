import { createStackNavigator } from 'react-navigation-stack';
import {
    createAppContainer
  } from 'react-navigation';
import Home from '../screens/Home';

const RNApp = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: { title: '', gesturesEnabled: false, headerTransparent: true, },
        }
    },
    {
        initialRouteName: 'Home'
    }
);

const App = createAppContainer(RNApp);

export default App;
