import React from 'react'
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert
}
from 'react-native'
import SkiiImage from '../assets/ski.png'


export default function CategoryListItem(props){
    const {category} = props;
    return (
        <TouchableOpacity 
            activeOpacity={ 0.5 }
            onPress={()=>{
                Alert.alert('Click!');
            }}
            >
            <View style={ styles.container }>
                <Text style={ styles.title }>{ category.name }</Text>
                <Image style={styles.catrgoryImage} source={SkiiImage} />
            </View>
        </TouchableOpacity>
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