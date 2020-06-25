export const addFeature = newFeature => {
    return { type: "ADD_FEATURE", payload: newFeature };
}

export const removeFeature = item => {
    return { type: "REMOVE_FEATURE", payload: item}
}