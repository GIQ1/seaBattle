export const requiredField = value =>{
    if (value) return undefined

    return 'Field is required'
}

export const maxLengthCreator = (maxlength) => value =>{
    if (value.length>maxlength) return `Max length is ${maxlength}`

    return undefined
}