
export const createDictionary = {
    from: {
        Dictionary: <SourcePropertyType, TargetPropertyType>(source: { [key: string]: SourcePropertyType}, callback: (property: SourcePropertyType) => TargetPropertyType) => {
            const result: { [key: string]: TargetPropertyType} = {}
            Object.keys(source).forEach(propName => {
                result[propName] = callback(source[propName])
            })
            return result
        },
    },
}
