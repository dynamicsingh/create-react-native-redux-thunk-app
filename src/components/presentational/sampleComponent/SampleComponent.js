import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const SampleComponent = ({componentLabel = 'default prop label', counterVal, updateCounter}) => {
    return (
        <View style={{marginTop: 100, marginLeft: 20, marginRight: 20}}>
            <Text style={{textAlign:'center'}}>{componentLabel} {counterVal}</Text>
            <Button style={{marginTop: 30}} onPress={updateCounter} title={"Update Counter"}/>
        </View>
    );
};

export default SampleComponent;