// import dependencies
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom'
import App from './App'
import Main from './pages/main'
import Currencies from './pages/currencies'
import Price from './pages/price'

// create the browser router
// this method is ALWAYS first
const router = createBrowserRouter(
    // helper router INSIDE first method
    // accepts elements as arguments and creates routes from them
    createRoutesFromElements(<>
        // Route is a predefined element that we imported above from react-router-dom
        <Route 
            path='/' 
            element={<App/>}
        >
            <Route
                path=''
                element={<Main/>}
            />  
            <Route
                path='currencies'
                element={<Currencies/>}
            />
            <Route
                path='price'
                element={<Price/>}
            />
        </Route>
        </>
    )
)

// export router
export default router