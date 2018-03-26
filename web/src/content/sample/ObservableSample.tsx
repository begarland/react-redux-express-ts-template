import * as React from 'react'
import { RoutesTypes } from './Routes'

interface ObservableSampleTypes extends RoutesTypes {}

const ObservableSample = (props: ObservableSampleTypes) => {
    return (
        <div id="observable-sample-container">
            <div id="observable-sample-box-slider-container">
                <div id="observable-sample-box" className={`${props.appState.moveBox ? 'box-animate' : ''}`}/>
            </div>
            <button onClick={props.triggerObservable}>Trigger observable</button>
            <h4>redux-observable will catch the SLIDE_BOX action dispatched on button click and the box will move with CSS</h4>
            <h4>after a small delay, it will dispatch the STOP_BOX and the box will stop and reset</h4>
            <button onClick={props.goBackToApp}>Go Back to localhost:3002</button>


        </div>
    )
}

export default ObservableSample