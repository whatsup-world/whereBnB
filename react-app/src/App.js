import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';

import Listings from './components/ListingComponent/Listings/Listings';
import ListingForm from './components/ListingComponent/NewListing/NewListing';
import SingleListing from './components/ListingComponent/SingleListing/SingleListing';
import Bookings from './components/BookingComponent/Bookings/Bookings';
import SingleBooking from './components/BookingComponent/SingleBooking/SingleBooking';
import BookingForm from './components/BookingComponent/NewBooking/NewBooking';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';
import Images from './components/ImageComponent/Images/Images/Images';
import NewImagePage from './components/ImageComponent/NewImages/NewImages';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <HomePage />
        </Route>
        <Route path='/listings' exact={true} >
          <Listings />
        </Route>
        <Route path='/listings/:listingId' exact={true} >
          <SingleListing />
        </Route>
        <ProtectedRoute path='/newListing'>
          <ListingForm />
        </ProtectedRoute>
        <Route path='/bookings/:bookingId' exact={true} >
          <SingleBooking />
        </Route>
        <ProtectedRoute path='/bookings' exact={true}>
          <Bookings />
        </ProtectedRoute>
        <ProtectedRoute path='/newBooking'>
          <BookingForm />
        </ProtectedRoute>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path='/listing_images' exact={true}>
          <Images />
        </Route>
        <ProtectedRoute path='/listings/:listingId/newImage'>
          <NewImagePage />
        </ProtectedRoute>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
