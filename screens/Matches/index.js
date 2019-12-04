import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import PreviousMatches from './PreviousMatchs';
import NextMatches from './NextMatches';

//Create the Top tab Navigator for Matches screen
export default createMaterialTopTabNavigator(
  {
    PreviousMatches,
    NextMatches
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
      },
      
      style: {
        backgroundColor: '#25282A',
      },
      indicatorStyle: {
          backgroundColor: '#1378C6',
          height: 4,
      }
    },
  }
)