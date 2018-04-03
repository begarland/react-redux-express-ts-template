import * as React from 'react'
import LabelComponent from '../LabelComponent/LabelComponent'
import Select from './Inputs/Select'
import Input from './Inputs/Input'

export interface SingleInputTypes {
    id: string;
    label?: string;
    additionalLabelClasses?: string;
    inputType: string;
    additionalInputClasses?: string;
    selectOptions?: string[];
    data: any;
    onInputChange: (string, Event) => string;
}

export interface InputGeneratorTypes {
    inputArray: SingleInputTypes[];
}



const InputGenerator = (props: InputGeneratorTypes) => {
    return (
        <div className="input-container">
            {props.inputArray.map((input: SingleInputTypes, index: number)=> {
                if (input.inputType === 'select'){
                    return (
                        <Select {...input} key={index}/>
                    )
                }
                return (
                    <Input {...input} key={index}/>
                )
            })}
        </div>
    )

}

export default InputGenerator