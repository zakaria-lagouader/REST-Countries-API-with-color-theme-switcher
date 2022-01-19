export const getCountriesByRegion = async (region: string) => {
    return await fetch(`https://restcountries.com/v2/regionalbloc/${region.toLowerCase()}`).then(res => res.json())
}

export const getCountriesByCode = async (code: string) => {
    return await fetch(`https://restcountries.com/v2/alpha/${code.toLowerCase()}`).then(res => res.json())
}