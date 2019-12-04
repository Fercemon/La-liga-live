// Import the components we need from the package
import {createStackNavigator} from 'react-navigation-stack'
import RankingScreen from './Rankings';

export default createStackNavigator({
    Ranking: {
        screen: RankingScreen,
        navigationOptions: {
            title: 'Ranking',
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
