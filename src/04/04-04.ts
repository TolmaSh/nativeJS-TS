
export type cityType = {
    title: string,
    houses: housesType[],
    governmentBuildings: governmentBuildingsType[],
    citizensNumber: number
}
type housesType ={
    id:number,
    buildedAt: number,
    repaired: boolean,
    address: addressesType
}
type addressesType = {
    number: number,
    street: {title: string}
}
export type governmentBuildingsType = {
    type: string,
    budget: number,
    staffCount: number,
    address: { street: { title: string } }
}