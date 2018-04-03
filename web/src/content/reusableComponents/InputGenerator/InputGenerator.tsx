import * as React from 'react'
import LabelComponent from '../LabelComponent/LabelComponent'

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
                        <div className="inline-select-container" key={index}>
                            {input.label && <LabelComponent label={input.label} additionalClasses={input.additionalLabelClasses}/>}
                            <select id={input.id} value={input.data} key={index} onChange={(event) => {input.onInputChange(input.id, event.target.value)}}>
                                {input.selectOptions.map((option: string, index: number) => {
                                   return(
                                        <option
                                            key={index}
                                            value={option}
                                        >
                                            {option}
                                        </option>
                                   )
                                })}
                            </select>
                        </div>
                    )
                }
                return (
                    <div className="inline-input-container" key={index}>
                        {input.label && <LabelComponent label={input.label} additionalClasses={input.additionalLabelClasses}/>}
                        <input
                            key={index}
                            id={input.id}
                            type={(input.inputType ? input.inputType : 'text')}
                            value={input.data || ''}
                            onChange={(event) => {input.onInputChange(input.id, event.target.value)}}
                        />
                    </div>
                )
            })}
        </div>
    )

}

export default InputGenerator