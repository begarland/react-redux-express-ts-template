import * as React from 'react'

interface BoldLabelTypes {
    id: string;
    label: string;
}

const BoldLabel = (props: BoldLabelTypes) => {
    return (
        <label id={props.id + '-label'} className="bold-label">{props.label}:</label>
    )
}

export default BoldLabel