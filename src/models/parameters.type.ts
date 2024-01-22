export type parameter = {
    id: string
    parameter: {
        title: string
        type: string
        value: string  
    }
}

export interface ParametersState {
    parameters: parameter[]
    parametersFilter: parameter[]
    detailCard: parameter
    error: boolean
    loading: boolean
}

export interface State {
    parameters: ParametersState
}
