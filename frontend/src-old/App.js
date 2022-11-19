import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import AllDevices from "./pages/AllDevices";
import Tickets from "./pages/Tickets";
// import Ticket from "./pages/Ticket";

import NewTicket from "./pages/NewTicket";
// import Header from "./components/Header";

import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./pages/NotFound";
// import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Router>
         <Layout>
        <div className="container">
        {/* <Navbar /> */}
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/register" element={<Register />} />
            <Route path="/new-ticket" element={<PrivateRoute />}>
              <Route path="/new-ticket" element={<NewTicket />} />
            </Route>
            <Route path="/tickets" element={<PrivateRoute />}>
              <Route path="/tickets" element={<Tickets />} />
            </Route>
            {/* <Route path="/ticket/:ticketId" element={<PrivateRoute />}>
              <Route path="/ticket/:ticketId" element={<Ticket />} />
            </Route> */}
            {/* <Route path="/all" element={<PrivateRoute />}>
              <Route path="/all" element={<AllDevices />} />
            </Route> */}
            <Route path="/*" element={<PrivateRoute />}>
              <Route path="/*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
        </Layout>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
