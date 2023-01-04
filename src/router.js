// import dependencies
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'

// create the browser router
// this method is ALWAYS first
const router = createBrowserRouter(
    // helper router INSIDE first method
    // accepts elements as arguments and creates routes from them
    createRoutesFromElements(
        // Route is a predefined element that we imported above from react-router-dom
        <Route path='/' element={<h1>Hello World</h1>}></Route>
    )
)

// export router
export default router