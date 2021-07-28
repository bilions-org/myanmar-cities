let cities = require('./data/cities')
let regions = require('./data/regions')

let app = {}

app.getCities = (regionId) => {
  let c = cities.filter((city) => {
    return city.region_id == regionId
  })
  return c.map(({ name_mm, name_en, id }) => {
    return {
      id,
      name_mm: name_mm,
      name_en: name_en,
    }
  })
}

app.getRegions = () => {
  return regions
}

module.exports = app
