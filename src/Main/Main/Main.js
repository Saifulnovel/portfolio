import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../../component/Banner/Banner';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    return (
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    );
};

export default Main;