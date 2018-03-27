import * as React from 'react'
import { Route, Switch } from 'react-router'
import { AppStateTypes } from '../../redux/store/templates/appState'
import ObservableSample from './ObservableSample'

export interface RoutesTypes {
    appState: AppStateTypes;
    goBackToApp: (MouseEvent) => void;
    triggerObservable: (MouseEvent) => void;
}

const Routes = (props: RoutesTypes) => {
    return (
        <div>
            <Switch>
                <Route
                    exact={true}
                    path="/redux"
                    render={() => {
                        return (
                                <div>
                                    <h1>{props.appState.sample}</h1>
                                </div>
                            )
                    }}
                />
                <Route
                    exact={true}
                    path="/redux-observable"
                    render={() => {
                        return (
                            <ObservableSample
                                appState={props.appState}
                                goBackToApp={props.goBackToApp}
                                triggerObservable={props.triggerObservable}
                            />
                        )
                    }}
                />
            </Switch>
        </div>
    )
}

export default Routes