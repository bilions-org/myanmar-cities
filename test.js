let myanmarCity = require('./index')

let regions = myanmarCity.getRegions()

for (let region of regions) {
  let cities = myanmarCity.getCities(region.id)
  console.log(cities)
}
