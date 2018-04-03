import * as React from 'react'
import LabelComponent from '../../LabelComponent/LabelComponent'
import { SingleInputTypes } from '../InputGenerator'

interface InputTypes extends SingleInputTypes {}

const Input = (props: InputTypes) => {
    return (
        <div className="inline-input-container">
            {props.label && <LabelComponent label={props.label} additionalClasses={props.additionalLabelClasses}/>}
            <input
                id={props.id}
                type={(props.inputType ? props.inputType : 'text')}
                value={props.data || ''}
                onChange={(event) => {props.onInputChange(props.id, event.target.value)}}
            />
        </div>
    )
}

export default Input