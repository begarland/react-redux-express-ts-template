import * as React from 'react'
import { RoutesTypes } from './Routes'
import LabelArrayDisplay from '../reusableComponents/LabelArrayDisplay/LabelArrayDisplay'
import FormComponent from '../reusableComponents/FormComponent/FormComponent'
import {FormDataType} from '../reusableComponents/FormComponent/FormDataTypeEnums'

interface ReduxSampleTypes extends RoutesTypes {}

const ReduxSample = (props: ReduxSampleTypes) => {
    return (
        <div id="redux-sample-container">
            <h1>{props.appState.sample}</h1>
            <LabelArrayDisplay array={props.formState.sampleFormArray}/>
            <FormComponent dataType={FormDataType.String} id="test" onInputChange={()=> console.log('test')} data={'cat'} label="cats"/>
        </div>
    )
}

export default ReduxSample