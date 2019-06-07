import * as React from 'react'

interface ILabel {
    label: string;
    additionalClasses?: string;
    showColon?: boolean;
}

const Label = (props: ILabel) => {
    const colon = (props.showColon ? ':' : '')
    return (
        <label 
            className={`label ${props.additionalClasses ? props.additionalClasses : ''}`}
        >
            {props.label}{colon}
        </label>
    )
}

export default Label