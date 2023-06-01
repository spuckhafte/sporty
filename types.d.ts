export type Store = {
    appliedFilters: string[]   
}
export type type = 'applyFilter' | 'removeFilter' | 'replaceFilters'
export type action = {
    type: type,
    payload:any
}
