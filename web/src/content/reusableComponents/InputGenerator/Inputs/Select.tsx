import * as React from 'react'
import LabelComponent from '../../LabelComponent/LabelComponent'
import { SingleInputTypes } from '../InputGenerator'

interface SelectTypes extends SingleInputTypes {}

const Select = (props: SelectTypes) => {
    return (
        <div className="inline-select-container">
            {props.label && <LabelComponent label={props.label} additionalClasses={props.additionalLabelClasses}/>}
            <select id={props.id} value={props.data} onChange={(event) => {props.onInputChange(props.id, event.target.value)}}>
                {props.selectOptions.map((option: string, optionIndex: number) => {
                    return(
                        <option
                            key={optionIndex}
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

export default Select