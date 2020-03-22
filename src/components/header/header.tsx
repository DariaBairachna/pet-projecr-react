import React, { useState } from 'react';
import { Container, Link, Avatar, Menu, MenuItem, Button } from '@material-ui/core';
import  ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './style.scss'

interface IProps {
    user: IUser | null,
}

interface IUser {
    avatar: string,
    id: number,
    name: string
}

export default function Header(props: IProps) {

    const [userMenuStatus, setUserMenuStatus] = useState(null);
    const openBasket = () => { }
    const handleClick = (event: any) => {
        setUserMenuStatus(event.currentTarget);
    }
    const handleClose = () => {
        setUserMenuStatus(null);
    };
    return (
        <header >
            <Container>
                <div className="header">
                    <div className="logo">
                        YorBook
                    </div>
                    <ul className="menu">
                        <li className="menu-item">
                            <Link href="#" onClick={openBasket} className="menu-icon">
                                <ShoppingCartOutlinedIcon />
                            </Link></li>
                        <li className="menu-item">
                            <Button aria-controls="user-menu" aria-haspopup="true" onClick={handleClick} >
                                {props.user ? <Avatar alt="Remy Sharp" src={props.user.avatar} /> : <AccountCircleIcon className="menu-icon"/>}
                            </Button>
                            <Menu
                                id="user-menu"
                                anchorEl={userMenuStatus}
                                keepMounted
                                open={Boolean(userMenuStatus)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>Shopping history</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </li>
                    </ul>
                </div>
            </Container>
        </header>
    );
}