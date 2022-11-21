export function calculator(str) {
    try {
        return eval(str)
    } catch (error) {
        return 'Please write a number'
    }
    
}