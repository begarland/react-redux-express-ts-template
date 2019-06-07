import * as React from 'react'
import { IRoutes } from '../Routes'

const ObservableSample = (props: IRoutes) => {
    return (
        <div id='observable-sample-container'>
            <div id='observable-sample-box-slider-container'>
                <div id='observable-sample-box' className={`${props.appState.moveBox ? 'box-animate' : ''}`}/>
            </div>
            <button onClick={props.triggerObservable}>Slide box</button>
        </div>
    )
}

export default ObservableSample