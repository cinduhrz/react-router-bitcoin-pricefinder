// contains helper function
// params is an object containing the url params as keys
export const priceLoader = async ({params}) => {
    const symbol = params.symbol
    const apiKey = "DB44205B-FF32-4740-991C-9387A4BCE77D"
    // loaders understand Fetch Responses and will automatically unwrap the res.json(), so you can simply return a fetch
    return (await fetch(`http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`)).json()
}