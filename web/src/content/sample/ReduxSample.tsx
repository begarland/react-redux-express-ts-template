import * as React from 'react'
import { IRoutes } from '../Routes'
import InputGenerator, {
    ISingleInput,
} from '../common/InputGenerator/InputGenerator'

interface IReduxSample extends IRoutes {

}
const ReduxSample = (props: IReduxSample) => {
    const colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'white', 'gray']
    
    const inputArray: ISingleInput[] = [
        {id: 'name', inputType: 'text', label: 'name', data: props.appState.inputs.name},
        {id: 'age', inputType: 'number', label: 'age', data: props.appState.inputs.age},
        {
            id: 'favoriteColor', 
            inputType: 'select', 
            label: 'favoriteColor', 
            data: props.appState.inputs.favoriteColor, 
            selectOptions: colorArray
        }
    ]

    return (
        <div>
            <InputGenerator inputArray={inputArray} onInputChange={props.inputChange}/>
        </div>
    )
}

export default ReduxSample