import * as React from 'react';
import {Image, View, StyleSheet, FlatList, Text} from 'react-native';
import {FormattedNumber} from "react-intl";
import {Fragment} from "react";

export default function Band({navigation}) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.header}
                source={require('../images/Lac-de-Vinca-Canigou-Neige-150x150.jpg')}
            />
            <View style={styles.card}>
                <FlatList
                    data={DATA}
                    renderItem={({item, index}) =>
                        <Item
                            lastItem={index === DATA.length - 1}
                            dueValue={item.dueValue}
                            title={item.title}/>}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Tatiana',
        dueValue: '500'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Tim',
        dueValue: '500'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Florence',
        dueValue: '-1000'
    },
];

const Item = ({title, dueValue, lastItem}) => (
    <Fragment>
        <View style={ styles.item}>
            <Text style={styles.fwBold}>{title}</Text>
            <Text style={[styles.fwBold, {fontSize: 17}]}>
                <FormattedNumber value={dueValue} style="currency" currency="EUR"/>
            </Text>
        </View>
        <View style={!lastItem &&  styles.border}></View>
    </Fragment>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 5,
    },
    header: {
        width: '100%',
    },
    card: {
        margin: 10,
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    fwBold: {
        fontWeight: 'bold',
    },
    border: {
        borderBottomWidth: 1,
        borderColor: 'rgb(246,245,245)'
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#ffffff'
    },
})
