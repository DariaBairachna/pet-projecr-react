import React from 'react';
import { Container, Link, } from '@material-ui/core';
import "./style.scss";
import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {


    return (
        <footer>
            <Container>
                <div className="footer">
                    <div className="logo">
                        YorBook
                </div>

                    <ul className="social-menu">
                        <li className="social-item"> <Link href="#" className="menu-icon">
                            <FacebookIcon />
                        </Link></li>
                        <li className="social-item"> <Link href="#" className="menu-icon">
                            <TelegramIcon />
                        </Link></li>
                        <li className="social-item"> <Link href="#" className="menu-icon">
                            <InstagramIcon />
                        </Link></li>
                    </ul>
                </div>
            </Container>
        </footer>
    );
}