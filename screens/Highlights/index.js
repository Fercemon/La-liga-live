// Import the components we need from the package
import {createStackNavigator} from 'react-navigation-stack'
import HighlightScreen from './Highlights';

export default createStackNavigator({
    Highlights: {
        screen: HighlightScreen,
        navigationOptions: {
            title: 'Highlights',
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