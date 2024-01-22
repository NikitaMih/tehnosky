export const checkFormValidity = (fields: any) => {
    return Object.values(fields).every((value) => !!value)
};