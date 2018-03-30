import { FormDataType } from '../../../content/reusableComponents/FormComponent/FormDataTypeEnums'

export const formState: FormStateTypes = {
    sampleFormArray: [
        {id: 'string-data-type', label: 'string', data: 'some-value', dataType: FormDataType.String, extraData: 'some-extra-data'},
        {id: 'number-data-type-input', label: 'number input', data: 2, dataType: FormDataType.Number, extraData: 'some-extra-data'},
        {id: 'number-data-type-counter', label: 'number input', data: 2, dataType: FormDataType.Number, extraData: 'some-extra-data'},
        {id: 'number-data-type-range', label: 'number input', data: 2, dataType: FormDataType.Number, extraData: 'some-extra-data'},
        {id: 'enum-data-type', label: 'enum dropdown', data: false, dataType: FormDataType.Enum, extraData: 'some-extra-data'},
        {id: 'boolean-data-type', label: 'boolean checkbox', data: false, dataType: FormDataType.Boolean, extraData: 'some-extra-data'},
        {id: 'array-data-type', label: 'array of values', data: false, dataType: FormDataType.Array, extraData: 'some-extra-data'},
    ],
}

export interface FormStateTypes {
    sampleFormArray: sampleFormArrayTypes[]
}

interface sampleFormArrayTypes {
    id: string;
    label: string;
    data: any;
    dataType: number;
    extraData?: any;
}

