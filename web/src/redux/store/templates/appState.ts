export const appState: AppStateTypes = {
    showNavigateButton: true,
    sample: 'this is a sample from the reducer.',
    moveBox: false,
    spinLogo: true,
    inputs: {
        name: '',
        age: null,
        favoriteColor: '',


    },
}

export interface AppStateTypes {
    showNavigateButton: boolean;
    sample: string;
    moveBox: boolean;
    spinLogo: boolean;
    inputs: InputTypes;

}

export interface InputTypes {
    name: string;
    age: number;
    favoriteColor: string;
}