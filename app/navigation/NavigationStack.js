import { createStackNavigator } from 'react-navigation-stack';
import {
    createAppContainer
  } from 'react-navigation';
import Home from '../screens/Home';
import DetailScreen from '../screens/DetailScreen';

const RNApp = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: { title: '', gesturesEnabled: false, headerTransparent: true, header: null },
        },
        DetailScreen: {
            screen: DetailScreen,
            navigationOptions: { title: '', gesturesEnabled: false, headerTransparent: true, header: null },
        }
    },
    {
        initialRouteName: 'Home'
    }
);

const App = createAppContainer(RNApp);

export default App;
