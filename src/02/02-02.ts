type streetType = {
    title: string
}
type adressType = {
    number?: number
    street: streetType
}
type housesType = {
    buildedAt: number
    repaired: boolean
    address: adressType

}
type governmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: adressType
}
export type CityType = {
    title: string
    houses: Array<housesType>
    governmentBuildings: Array<governmentBuildingsType>
    citizensNumber: number
}