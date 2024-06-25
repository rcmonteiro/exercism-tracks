export function age(planet: PLANET, ageInSeconds: number): number {
  const planetAge = (ageInSeconds / PLANETS[planet]) / EARTH_YEAR_IN_SECONDS; 
  return Number(planetAge.toFixed(2));
}

const EARTH_YEAR_IN_SECONDS: number = 365.25 * 24 * 60 * 60;

const PLANETS: {[key: string]: number} = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

type PLANET = keyof typeof PLANETS;
