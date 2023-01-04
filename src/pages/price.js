import { useLoaderData } from "react-router-dom"

const Price = (props) => {
    // get the data fetched by our loader
    // useLoaderData makes sure that the fetch request is fulfilled before coin is created
    // this is a hook!! hooks into fetch request process and does something with that data
    const coin = useLoaderData()
    return (<>
        <div>
            <h1>
                {coin.asset_id_base}/{coin.asset_id_quote}
            </h1>
            <h2>{coin.rate}</h2>
        </div>
    </>)
}

export default Price