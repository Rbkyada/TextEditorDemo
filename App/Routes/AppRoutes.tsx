import InitialScreen from '@Components/Initial';
import Login from '@Components/Login/Login';
import {AppTab} from '@Routes/AppTab';
import {TextEditor} from '@Components/Home/TextEditor';

enum Route {
  Initial = 'InitialScreen',
  LoginScreen = 'Login',
  HomeScreen = 'Home',
  TextEditorScreen = 'TextEditor',
}

const Routes = [
  {
    name: Route.Initial,
    screen: InitialScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: Route.LoginScreen,
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: Route.HomeScreen,
    screen: AppTab,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: Route.TextEditorScreen,
    screen: TextEditor,
    navigationOptions: {
      headerShown: false,
    },
  },
];

export {Routes, Route};
