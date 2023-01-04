export const priceLoader = async ({params}) => {
    const symbol = params.symbol
    const apiKey = "DB44205B-FF32-4740-991C-9387A4BCE77D"
    return await (await fetch(`http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`)).json()
}