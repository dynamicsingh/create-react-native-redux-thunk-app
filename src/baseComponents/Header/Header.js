import React, {Component} from 'react';
import {Header, Left, Body, Right, Button, Icon, Title, Text} from 'native-base';
import { withNavigation } from 'react-navigation';

class BaseHeader extends Component {
    render(){
        const {navigation} = this.props;
        const currentRouter = this.props.navigation.state.routeName;
        return (
            <Header>
                <Left>
                    <Button onPress={() => currentRouter === 'Home' ? this.props.navigation.openDrawer() : this.props.navigation.goBack()} transparent>
                        <Icon name={currentRouter === 'Home'?'menu': 'arrow-back'}/>
                    </Button>
                </Left>
                <Body>
                <Title>React Native Redux</Title>
                </Body>
            </Header>
        )
    }
}
export default withNavigation(BaseHeader);