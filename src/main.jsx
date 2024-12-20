import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeLayouts from "./layoutes/pages/HomeLayouts.jsx";
import RouteChangeHandler from "./components/shared/RouteChangeHandler.jsx";
import NotFound from "./components/errors/NotFound.jsx";
import Login from "./components/auth/Login.jsx";
import LoginLayouts from "./layoutes/pages/LoginLayouts.jsx";
import Config from "./config/Config.jsx";

createRoot(document.getElementById('root')).render(<StrictMode>
    <Router>
        <RouteChangeHandler />
        <Config />
        <Routes>
            <Route path="/" element={<HomeLayouts/>}/>
            <Route path="/login" element={<LoginLayouts />}/>

            <Route path="*" element={<NotFound />}/>
        </Routes>
    </Router>
</StrictMode>)
