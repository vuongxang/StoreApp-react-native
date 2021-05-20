import React from 'react'
import {
    Image,
    Text,
    View,
    StyleSheet
}
from 'react-native'
import SkiiImage from '../assets/ski.png'


export default function CategoryListItem(props){
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Category List Item</Text>
            <Image style={styles.catrgoryImage} source={SkiiImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    catrgoryImage: {
        width: 64,
        height: 64
    },
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 16
    },
    catrgoryImage: {
        width: 64,
        height: 64
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }
})