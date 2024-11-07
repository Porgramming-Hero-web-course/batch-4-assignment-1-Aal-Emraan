{
    const getProperty = <T,X extends keyof T>(obj: T , propName: X) => {
        return obj[propName]
    }
}