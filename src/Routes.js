
// import React from "react";
// import {Router, Routes, Route, Navigate} from "react-router-dom";
// import AddShoes from "./components/AddShoes/AddShoes";
// import Header from "./components/Header/Header";

// import Home from "./components/Home/Home";
// import SignIn from "./components/SignIn/SignIn";
// import SignUp from "./components/SignUp/SignUp";
// import AuthContextProvider from "./contexts/AuthContext";
// import ShoesContextProvider from "./contexts/shoesContext";
// import ShoeDetails from "./components/ShoeDetails/ShoeDetails";
// import Profile from "./components/Profile/Profile";
// import UsersContextProvider from "./contexts/UsersContext";
// import Cart from "./components/Cart/Cart";
// import AdminPanel from "./components/AdminPanel/AdminPanel";
// import EditShoe from "./components/EditShoe/EditShoe";
// import OrderForm from "./components/OrderForm/OrderForm";
// import Footer from "./components/Footer/Footer";
// import FootballShoes from "./components/FootbalShoes/FootballShoes";
// import ShoesNew from "./components/ShoesNew/ShoesNew";
// import AboutUs from "./components/AboutUs/AboutUs";
// import Vakans from "./components/Vakans/Vakans";
// import Dostavka from "./components/Dostavka/Dostavka";
// import Contacts from "./components/Contacts/Contacts";
// import Size from "./components/Size/Size";
// import { Card } from "@material-ui/core";


// const Routing = () => {
//     return (
        
//         <ShoesContextProvider>
//             <AuthContextProvider>
//                 <UsersContextProvider>
//                     <Router>
//                         <Header />
                       
//                         <Routes>
//                             <Route path="/add" element={<AddShoes/>} />
//                             <Route path="/" element={<Home/>} />
//                             <Route path="/card" element={<Card/>} />
//                             <Route path="/login" element={<SignIn/>} />
//                             <Route path="/register" element={<SignUp/>} />
//                             <Route path="/profile" element={<Profile/>} />
//                             <Route path="/cart" element={<Cart/>} />
//                             <Route
                            
//                                 path="/details/:id"
//                                 element={<ShoeDetails/>}
//                             />
//                             <Route path="/admin" element={<AdminPanel/>} />
//                             <Route
                            
//                                 path="/edit/:id"
//                                 element={<EditShoe/>}
//                             />
//                             <Route
                            
//                                 path="/order-form"
//                                 element={<OrderForm/>}
//                             />
//                             <Route
                            
//                                 path="/edit/:id"
//                                 element={<EditShoe/>}
//                             />
//                             <Route
                            
//                                 path="/football"
//                                 element={<FootballShoes/>}
//                             />
//                             <Route path="/new" element={<ShoesNew/>} />
//                             <Route path="/about" element={<AboutUs/>} />
//                             <Route path="/vak" element={<Vakans/>} />
//                             <Route
                            
//                                 path="/dostavka"
//                                 element={<Dostavka/>}
//                             />
//                             <Route
                            
//                                 path="/contacts"
//                                 element={<Contacts/>}
//                             />
//                             <Route path="/size" element={<Size/>} />
//                             <Navigate to="/" />
//                         </Routes>
                       
//                         <Footer />
//                     </Router>
//                 </UsersContextProvider>
//             </AuthContextProvider>
//         </ShoesContextProvider>
//     );
// };

// export default Routing;
