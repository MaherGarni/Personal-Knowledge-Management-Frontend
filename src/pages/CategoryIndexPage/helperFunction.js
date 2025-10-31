export default function createCategoryTree(categories) {
    const catLookup = {};


    for (let i = 0; i < categories.length; i++) {
    const { parent, ...rest } = categories[i];

    if (!catLookup[rest.hierarchy]) catLookup[rest.hierarchy] = {};

    catLookup[rest.hierarchy][rest.id] = {
        data: rest,
        parent: parent?.id || null,
        children: []
    };
    }

    const hierarchyLevels = Object.keys(catLookup).map(Number).sort((a, b) => b - a);

    for (const level of hierarchyLevels) {
        for (const [key, value] of Object.entries(catLookup[level])) {
            if (value.data.hierarchy - 1 > 0) {
                const parentHierarchy = value.data.hierarchy - 1;
                const parentId = value.parent
                catLookup[parentHierarchy][parentId]["children"].push(value)
            }
        }
    }

    return Object.values(catLookup["1"]);

}