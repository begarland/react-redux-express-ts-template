export const appState: AppStateTypes = {
    showNavigateButton: true,
    sample: 'this is a sample from the reducer.',
    moveBox: false,
    spinLogo: true,
}

export interface AppStateTypes {
    showNavigateButton: boolean;
    sample: string;
    moveBox: boolean;
    spinLogo: boolean;

}