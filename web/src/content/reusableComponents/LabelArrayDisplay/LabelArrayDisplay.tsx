import * as React from 'react'
import BoldLabel from '../Label/BoldLabel'

export interface LabelArrayDisplayTypes {
    array: LabelDataDisplayTypes[];
}

export interface LabelDataDisplayTypes {
    id: string;
    label: string;
    data: any;
    dataType: number;
    extraData?: any;
}


const LabelArrayDisplay = (props: LabelArrayDisplayTypes) => {
    return(
        <div id="label-array-display">
            {props.array.map(function(value: any, index: number) {
                return(
                    <LabelDataDisplay
                        key={index}
                        id={value.id}
                        label={value.label}
                        data={value.data}
                        dataType={value.dataType}
                        extraData={value.extraData}
                    />
                )
            })

            }
        </div>
    )
}

const LabelDataDisplay = (props: LabelDataDisplayTypes) => {
    return(
        <div id={props.id + '-label-container'} className="label-container">
            <BoldLabel id={props.id} label={props.label}/>
            <h4 id={props.id + '-data-label'} className="regular-label">{props.data.toString()} {props.extraData} ({props.dataType})</h4>
        </div>
    )
}

export default LabelArrayDisplay