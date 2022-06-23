export const logger = (store) => (next) => (action) => {
    // console.log(action);
    let result = next(action)
    return result
}