import BookingPage from "../container/HomeTemplate/BookingPage"
import HomePage from "../container/HomeTemplate/HomePage"
const routesHome=[
    {
        exact:true,
        path:"/",
        Component:HomePage
    },
    {
        exact:false,
        path:"/booking",
        Component:BookingPage
    }
]


export{routesHome}