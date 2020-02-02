import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Icon, ListItem, Col, Grid, Row, Content, Text } from 'native-base';

export default class ItemType extends React.Component {


    render(){
        return (
            <ListItem style={styles.container} onPress={this.props.onPress}>
                <Text style={styles.textStyle}>{this.props.item.title}</Text>
            </ListItem>
       
        );
    }
}
const styles = StyleSheet.create({
    container:{
        margin:10,
    },
   
    textStyle:{
        marginLeft:30
    }
   
});
