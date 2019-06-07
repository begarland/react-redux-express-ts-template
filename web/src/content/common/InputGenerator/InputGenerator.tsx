import * as React from 'react'
import Select from './Inputs/Select'
import Input from './Inputs/Input'

export interface ISingleInput {
    id: string;
    label?: string;
    additionalLabelClasses?: string;
    hideColon?: boolean;
    inputType?: string;
    additionalInputClasses?: string;
    selectOptions?: string[];
    data: any;

}

export interface IInputGenerator {
    inputArray: ISingleInput[];
    onInputChange: (key: string, value: string) => (event: MouseEvent) => void;
}

const InputGenerator = (props: IInputGenerator) => {
    return (
        <div className='input-container'>
            {props.inputArray.map((input: ISingleInput, index: number) => {
                if (input.inputType === 'select') {
                    return (
                        <Select {...input} key={index} onInputChange={props.onInputChange}/>
                    )
                }
                return (
                    <Input {...input} key={index} onInputChange={props.onInputChange}/>
                )
            })}
        </div>
    )

}

export default InputGenerator