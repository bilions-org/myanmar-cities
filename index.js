let cities = require('./data/cities.json')
let regions = require('./data/regions.json')

let app = {}

app.getCities = (regionId) => {
  let c = cities.filter((city) => {
    return city.region_id == regionId
  })
  return c.map(({ name_mm, id }) => {
    return {
      id,
      name: name_mm,
    }
  })
}

app.getRegions = () => {
  return regions
}

module.exports = app
