let cities = require('./data/cities.min')
let regions = require('./data/regions.min')

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

app.getAllCities = () => {
  return cities
}

app.getCitiesMM = (regionId) => {
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

app.getCitiesEN = (regionId) => {
  let c = cities.filter((city) => {
    return city.region_id == regionId
  })
  return c.map(({ name_en, id }) => {
    return {
      id,
      name: name_en,
    }
  })
}

module.exports = app
