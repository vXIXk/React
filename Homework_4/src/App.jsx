import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet,
    useNavigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
// import FormPage from "./../../pages/FormPage"
import UsersPage from "./pages/UsersPage";
import SliderPage from "./pages/SliderPage";
import Error from "./components/Error";
import styles from "./assets/App.module.sass";

export default function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route>
                    {/* <Route to="/form" element={<FormPage/>}/> */}
                    <Route path="/" element={<UsersPage />} />
                    <Route path="/slider" element={<SliderPage />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </Router>
    );

    // <SliderPage />;
}
