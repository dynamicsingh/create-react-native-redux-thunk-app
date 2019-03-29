import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'native-base';

const SampleComponent = ({componentLabel = 'default prop label', counterVal, updateCounter}) => {
    return (
        <View style={{marginTop: 100, marginLeft: 20, marginRight: 20}}>
            <Text style={{textAlign:'center'}}>{componentLabel} {counterVal}</Text>
            <Button style={{marginTop: 30, alignSelf:'center'}} transparent onPress={updateCounter}><Text>Update Counter</Text></Button>
        </View>
    );
};

export default SampleComponent;