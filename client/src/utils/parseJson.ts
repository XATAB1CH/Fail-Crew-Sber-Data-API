
const parseJson = (schema: any): any[] => {
    
    if(!schema) {
        return [];
    }

    const parseProperties = (properties: any, requiredFields: string[]) => {
        return requiredFields.map((field: string) => {
            if (properties[field]) {
                return {
                    fieldName: field,
                    description: properties[field].description || "No desc",
                    type: properties[field].type || "unknown",
                };
            } else {
                return {
                    fieldName: field,
                    description: "Поле не найдено",
                    type: "unknown",
                };
            }
        });
    };

    const result: any[] = [];
    schema.required.forEach((key: string) => {
        const subSchema = schema.properties[key];
        if (subSchema) {
            const fields = parseProperties(subSchema.properties, subSchema.required || []);
            result.push({
                section: key,
                fields,
            });
        }
    });

    return result;
};

export default parseJson;