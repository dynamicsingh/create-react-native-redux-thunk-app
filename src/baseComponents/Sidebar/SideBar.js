import React, { Component } from "react";
import { Image, FlatList } from "react-native";
import { withNavigation } from 'react-navigation';
import {
    Content,
    Text,
    ListItem,
    Icon,
    Container,
    Left,
    Right,
    Badge
} from "native-base";
import styles from "./style";

const drawerCover = {uri: "https://webgradients.com/public/webgradients_png/026%20Saint%20Petersburg.png"};
const drawerImage = require("./../../../assets/logo.png");
const datas = [
    {
        name: "Home",
        route: "Home",
        key:"Home",
        icon: "home",

    },
    {
        name: "Second View",
        route: "SecondScreen",
        key:"SecondRoute",
        icon: "navigate",
        types: 10,
        bg: '#000'
    }
];

class BaseSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shadowOffsetWidth: 1,
            shadowRadius: 4
        };
    }

    renderItem(data){
        return (
            <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
            >
                <Left>
                    <Icon
                        active
                        name={data.icon}
                        style={{ color: "#777", fontSize: 26, width: 30 }}
                    />
                    <Text style={styles.text}>
                        {data.name}
                    </Text>
                </Left>
                {data.types &&
                <Right style={{ flex: 1 }}>
                    <Badge
                        style={{
                            borderRadius: 3,
                            height: 25,
                            width: 72,
                            backgroundColor: data.bg
                        }}
                    >
                        <Text
                            style={styles.badgeText}
                        >{`${data.types}`}</Text>
                    </Badge>
                </Right>}
            </ListItem>
        )
    }

    render() {
        return (
            <Container>
                <Content
                    bounces={false}
                    style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
                    <Image source={drawerCover} style={styles.drawerCover} />
                    <Image square style={styles.drawerImage} source={drawerImage} />
                    <FlatList
                        data={datas}
                        renderItem={({item}) => this.renderItem(item)}
                    />
                </Content>
            </Container>
        );
    }
}

export default withNavigation(BaseSideBar);