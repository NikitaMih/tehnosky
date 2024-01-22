declare global {
    namespace UI {

    }

    namespace Reducer {
        type AuthState = {
            id: number;
            userName: string;
            loading: boolean;
            redirect: string;
            redirectLogin: string;
            error: {code: number, detail:string, fieldName: string}[] | null;
            registrationData: RegistrationData;
            resetData: ResetData;
            accessToken: string,
            refreshToken: string,
            specialistData: SpecialistData,
        };
    }
}