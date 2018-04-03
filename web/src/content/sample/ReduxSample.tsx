import * as React from 'react'
import {RoutesTypes} from './Routes'
import InputGenerator, {
    SingleInputTypes,
} from '../reusableComponents/InputGenerator/InputGenerator'

interface ReduxSampleTypes extends RoutesTypes {

}
const ReduxSample = (props: ReduxSampleTypes) => {
    const colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'white', 'gray']

    const inputArray: SingleInputTypes[] = [
        {id: 'name', inputType: 'text', label: 'name', data: props.appState.inputs.name, onInputChange: props.inputChange},
        {id: 'age', inputType: 'number', label: 'age', data: props.appState.inputs.age, onInputChange: props.inputChange},
        {id: 'favoriteColor', inputType: 'select', data: props.appState.inputs.favoriteColor, selectOptions: colorArray, onInputChange: props.inputChange}
    ]

    return (
        <div>
            <h1>{props.appState.sample}</h1>
            <InputGenerator inputArray={inputArray}/>
        </div>
    )
}

export default ReduxSample