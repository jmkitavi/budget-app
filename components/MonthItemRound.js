import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {View, Text, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class MonthItemRound extends Component {
    render () {
        const icon = this.props.or ? 'plus' : 'minus';
        return (
            <View style={styles.container}>
                <Icon
                    size={30}
                    containerStyle={styles.iconLeft}
                    name={icon}
                    type='font-awesome'
                    color='#ff6666'
                />
                <View>
                    <Text style={styles.text}>{this.props.text}</Text>
                    <Text style={styles.numbers}>{'Sh. ' + this.props.$}</Text>
                </View>
                <Icon 
                    size={30}
                    containerStyle={styles.iconRight}
                    name='trash'
                    type='font-awesome'
                    color='#fff'
                    onPress={this.props.removeItem(this.props.monthId, this.props.id)}
                />
            </View>
        );
    }
}

const styles = {
    iconLeft: {
        borderRadius: 50,
        width: 80,
    },
    iconRight: {
        borderRadius: 50,
        height: 80,
        width: 80,
        backgroundColor: '#ff6666',
    },
    container: {
        width: SCREEN_WIDTH - 10,
        borderRadius: 50,
        backgroundColor: '#f1f1f1',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 80,
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 5
    },
    text: {
        fontSize: 20,
        color: '#555'
    },
    numbers: {
        fontSize: 16,
        color: '#555' 
    }
};