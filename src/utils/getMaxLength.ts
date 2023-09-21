// function for getting max length of input field

export function getMaxLength(fieldName: string | undefined) {
    if (fieldName === 'Price') {
        return 4;
    } else if (fieldName === 'Size US') {
        return 2;
    } else if (fieldName === 'Year') {
        return 4;
    } else {
        return 30; // default value for sneakerName and brand
    }
}
