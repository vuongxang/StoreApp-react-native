import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Dụng cụ trượt tuyết' },
        { id: 2, name: 'Quần áo trượt tuyết' },
        { id: 3, name: 'Kính mũ' },
        { id: 4, name: 'Đồng hồ' },
        { id: 5, name: 'Kính mắt' },
        { id: 6, name: 'Dây lưng' },
      ],
    }
  }

  render(){
    const {categories} = this.state;
    return (
          <FlatList 
            data = {categories}
            renderItem={ ({item})=> <CategoryListItem category={item} /> }
            keyExtractor = { item => `${item.id}` }
            contentContainerStyle= {{ paddingRight: 16, paddingLeft:16, backgroundColor: '#DCDCDC', }}
          />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});
