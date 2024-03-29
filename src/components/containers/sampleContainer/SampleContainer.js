import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import SampleComponent from '../../presentational/sampleComponent/SampleComponent';
import {Button, Text} from 'native-base';
import {sampleActionCreator} from './../../../actionCreators/sampleActionCreator';
import BaseHeader from "../../../baseComponents/Header/Header";

class SampleContainer extends Component {
    render() {
        return (
            <Fragment>
                <BaseHeader/>
                <SampleComponent
                    counterVal={this.props.counterVal}
                    updateCounter={() => this.props.updateCounter(1)}
                    componentLabel={'Sample component is loading inside sample container with counter val:'}/>
                <Button style={{alignSelf:'center'}} transparent onPress={() => this.props.navigation.navigate('SecondScreen')}><Text>Navigate</Text></Button>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counterVal: state.sample.counter || 0
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCounter: (counter) => dispatch(sampleActionCreator(counter))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer);
/* connect(mapStateToProps, mapDispatchToProps) is HOC which will return a component
*/