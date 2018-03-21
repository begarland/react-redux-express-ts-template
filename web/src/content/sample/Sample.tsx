import * as React from 'react'
import { Route, Switch } from 'react-router'

interface SampleProps {
    appState: {
        sample: string
    };
    goBackToApp: (MouseEvent) => void;
}

const Sample = (props: SampleProps) => {
    return (
        <div>
            <Switch>
                <Route
                    exact={true}
                    path="/sample"
                    render={() => {
                        return (
                                <div>
                                    <h1>{props.appState.sample}</h1>
                                    <button onClick={props.goBackToApp}>Go Back to localhost:3002</button>
                                </div>
                            )
                    }}
                />
            </Switch>
        </div>
    )
}

export default Sample