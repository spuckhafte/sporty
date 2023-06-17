export type Store = {
    appliedFilters: string[]   
}
export type type = 'applyFilter' | 'removeFilter' | 'replaceFilters'
export type action = {
    type: type,
    payload:any
}
export type Gym = {
    "id": string,
    "name": string,
    "imgs": string[],
    "rating": string,
    "totalRatings": number
    "area": string,
    "city": string,
    "state": string,
    "country": string,
}
export type GymCollection = {
    [index: number]: Gym
}