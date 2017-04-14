import React from 'react';
import { StackNavigator } from 'react-navigation';
import { 
	HomeScreen,
	VideoPlayerScreen,
} from '@screens'
const App = StackNavigator({
  Home: { screen: HomeScreen },
  VideoPlayer: { screen: VideoPlayerScreen },
});

export default App