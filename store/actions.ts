export const manageFilters = (
    type:'applyFilter'|'removeFilter'|'replaceFilters', 
    filterName:string|string[]
) => {
    return {
        type,
        payload: filterName
    }
}