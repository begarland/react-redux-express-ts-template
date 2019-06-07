export const appState: IAppState = {
    showNavigateButton: true,
    moveBox: false,
    spinLogo: true,
    inputs: {
        name: '',
        age: null,
        favoriteColor: '',
    },
    sampleData: null,
    sampleDataError: false,
    isSearching: false,

}

export interface IAppState {
    showNavigateButton: boolean;
    moveBox: boolean;
    spinLogo: boolean;
    inputs: IInput;
    sampleData: Object[] | null;
    sampleDataError: boolean;
    isSearching: boolean;

}

export interface IInput {
    name: string;
    age: number;
    favoriteColor: string;
}