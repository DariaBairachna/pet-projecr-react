import React, { Fragment } from 'react';
import './style.scss'
import Header from '../header/header';
import Footer from '../footer/footer';
import AppRouting from '../../app-routing';


export default function Layout() {
    return (
        <Fragment>
            <Header user={null}/>
            <AppRouting />
            <Footer />
        </Fragment>
    );
}