import * as React from 'react'
import BoldLabel from '../Label/BoldLabel'
import { FormDataType } from './FormDataTypeEnums'


interface FormComponentTypes {
    dataType: number;
    id: string;
    inputType?: string;
    showValidation?: string;
    onInputChange: (string, Event) => void;
    data: any;
    label: string;

}

const FormComponent = (props: FormComponentTypes) => {
    let inputElement

    switch (props.dataType){
        case FormDataType.String: {
            inputElement = (
                <input
                    id={props.id + '-input'}
                    type={(props.inputType ? props.inputType : 'text')}
                    className={`input-alone ${props.showValidation === 'invalid' ? 'invalid' : ''}`}
                    value={props.data || ''}
                    onChange={(event) => {props.onInputChange(props.id, event.target.value)}}
                />
            )
        }
    }


    return (
        <form>

            <BoldLabel id={`${props.id}-label`} label={props.label} />
            {inputElement}
        </form>
    )



}

export default FormComponent