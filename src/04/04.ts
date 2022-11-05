import {cityType, governmentBuildingsType} from './04-04';

export const demolishHousesOnTheStreet =  (array: cityType, street: string) => {
    array.houses = array.houses.filter(house => house.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildingArr: governmentBuildingsType[], staffCount: number) => {
      return  buildingArr.filter(build => build.staffCount > 500)
}