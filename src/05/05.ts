import {governmentBuildingsType, housesType} from '../04/04-04';

export function getStreetsTitlesOfGovernmentBuildings(buildings: governmentBuildingsType[]) {
    return buildings.map(build => build.address.street.title)
}
export function getStreetsTitlesOfHouses(houses: housesType[]) {
    return houses.map(house => house.address.street.title)
}

export const greetingMessage = (houses:housesType[]) => {
  return houses.map(house => `Hello my friends from ${house.address.street.title}`)
}