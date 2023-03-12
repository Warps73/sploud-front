import * as React from 'react';
import {Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Band from "./components/Band";
import {IntlProvider} from "react-intl";

const Drawer = createDrawerNavigator();

export default function App() {

    const Theme = {
        colors: {
            background: '#f0f0f3',
        },
    };

    return (
        <NavigationContainer theme={Theme}>
            <IntlProvider locale={'fr'}>
                <Drawer.Navigator
                    screenOptions={function ({navigation, route}) {
                        return {
                            headerLeft: () => (
                                <Button title="Groupes" onPress={() => {
                                    navigation.openDrawer();
                                }}/>
                            ),
                        };
                    }}
                    title="Groupe" initialRouteName="Home">
                    <Drawer.Screen name="Home" component={Band}/>
                    <Drawer.Screen name="Groups" component={Band}/>
                </Drawer.Navigator>
            </IntlProvider>
        </NavigationContainer>
    );
}
