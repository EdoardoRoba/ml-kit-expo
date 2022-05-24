import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { TouchableOpacity } from "react-native";
import Login from '../components/Login'
import Home from '../components/Home'
import Route from "../components/Route";
import Logout from "../components/Logout";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Home"
        }
    },
    Route: {
        screen: Route,
        navigationOptions: ({ navigation }) => ({
            title: "Image detector",
            headerRight: (
                <TouchableOpacity
                    // style={{ backgroundColor: '#DDDDDD', padding: 5 }}
                    onPress={() => navigation.navigate("Login")}>
                    <Logout />
                </TouchableOpacity>
            ),
            headerLeft: null
        })
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "white",
        headerStyle: {
            backgroundColor: "#0282ba",
            height: 100
        }
    }
});

export default createAppContainer(HomeStack)