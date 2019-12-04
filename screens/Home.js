// Import the components we need from the package
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack'
import PreviousMatches from './Matches';
import RankingScreen from './Rankings';
import HighlightScreen from './Highlights';

/* Create a stackNavigator for Matches page here 
   because you will create createMaterialTopTabNavigator in Matches/index.js  */

const stackMatchs = createStackNavigator({
    Matchs: {
        screen: PreviousMatches, //Call PreviousMatches because we create another tabNavigator in Matches/index.js
        navigationOptions: {
            title: 'Matchs',
            headerTitleStyle: { 
                textAlign:"center", 
                flex:1,
                color: 'grey',
            },
            headerStyle: {
                backgroundColor: '#25282A',
                borderBottomWidth: 2,
                borderBottomColor: 'grey',
            }
        }
    },
})

//Create the App container that will hold all the navigations
export default createAppContainer(

    //Creat bottomTabnavigator using the stackNavigations we created as screens
    createBottomTabNavigator(
        {
            Matchs: stackMatchs,
            Ranking: RankingScreen,
            Highlights: HighlightScreen
        },
        {
            //to add styles to the tabNavigator
            tabBarOptions: {
            activeTintColor: '#1378C6', 
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#25282A',
            inactiveBackgroundColor: '#25282A',
            labelStyle: {
                fontSize: 20,
            },
            tabStyle:{
                borderTopWidth: 2,
                borderTopColor: 'grey',
                paddingVertical: 10,
            }
            }
        },
    ),
)
