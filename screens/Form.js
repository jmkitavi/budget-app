import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import uuid from 'uuid/v1';
import {addNewLineinMonthBudget} from '../actions/monthActions';
import BackBtn from '../components/BackBtn';
import Switch from '../components/Switch';
import FormInput from '../components/FormInput';
import Header from '../components/Header';

class Form extends PureComponent {
    state = {
        text: '',
        $: '',
        or: true,
        warning: ''
    }

    onButtonPress = () => {
        if(!this.state.text || !this.state.$){
            return this.setState({warning: 'Both fields are requered!'})
        }
        const payload = {
            id: uuid(),
            text: this.state.text,
            $: this.state.$,
            or: this.state.or
        };
        const id = this.props.navigation.state.params.item.id;
        this.props.dispatch(addNewLineinMonthBudget(id, payload));
        this.setState({
            text: '',
            $: ''
        });
    }
    change = () => {
        this.setState({or: !this.state.or});
    }
    isNumber = ($) => {

        if(isNaN($)){
            return this.setState({ warning: 'This input accept only numbers!' });
        }
        this.setState({
            $
        });
    }
    back = () => {
        const {item} = this.props.navigation.state.params;
        this.props.navigation.navigate('month', {item});
    }
    render () {
        return (
            <View>
                <Header title='Add Input'/>
                <View style={styles.container}>
                    <FormInput
                        placeholder='Some product name'
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <FormInput
                        placeholder={this.state.warning || 'Only numbers'}
                        onChangeText={this.isNumber}
                        value={this.state.$}
                    />

                    <View style={styles.buttonsRow}>
                        <BackBtn style={{marginLeft: 10}} back={this.back}/>
                        <View  style={styles.buttonsRow}>
                            <Switch change={this.change} or={this.state.or}/>
                            <Icon
                                size={30}
                                containerStyle={styles.iconSwitch}
                                name='check'
                                type='font-awesome'
                                color='#fff'
                                onPress={this.onButtonPress} 
                            />
                        </View>
                    </View>
                
                </View>
            </View>
        )
    }
}

const styles = {
    container:{
        padding: 5,
        paddingTop: 20
    },
    iconSwitch: {
        borderRadius: 50,
        height: 80,
        width: 80,
        backgroundColor: '#ff6666', 
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

export default connect()(Form);