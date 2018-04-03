import * as React from 'react'

interface LabelComponentTypes {
    label: string;
    additionalClasses?: string;
}

const LabelComponent = (props: LabelComponentTypes) => {
    return (
        <label className={`label ${props.additionalClasses}`}>{props.label}: </label>
    )
}

export default LabelComponent

