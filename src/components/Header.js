import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { Context } from "./Wrapper";
import { BsBoxArrowLeft, 
    BsBoxArrowRight, 
    BsInfoCircle } from 'react-icons/bs';
import { TiThMenu } from 'react-icons/ti';
import '../styles/navigation.sass';
import logo from '../icons/logo.png';
import Info from './Info'

function Navigation () {
    const context = useContext(Context);

    const showDetails = () => {
        const detailsDiv = document.getElementById('info-details');
        detailsDiv.style.left = 0;
    }
    const hideDetails = () => {
        const detailsDiv = document.getElementById('info-details');
        detailsDiv.style.left = '-100%';
    }
    const showMenu = () => {
        const menuDiv = document.getElementById('menu-details');
        menuDiv.style.right = 0;
    }
    const hideMenu = () => {
        const menuDiv = document.getElementById('menu-details');
        menuDiv.style.right = '-14em';
    }

    return (
        <header>
            <div className='header'>
                <ul id="nav">
                    <li id="info" onClick={showDetails}>
                        <BsInfoCircle className="icon" />
                    </li>
                    <span id='info-large'>
                        <Info />
                    </span>
                    <li><NavLink to='/experiencegolte/'className={(navData) => navData.isActive ? "selected" : "" } >
                        <FormattedMessage
                            id = "nav.experience"
                            defaultMessage="Experience Golte"
                    /></NavLink></li>
                    <li><FormattedMessage
                        id = "nav.buy"
                        defaultMessage="Buy"
                    /></li>
                    <li><FormattedMessage
                        id = "nav.reserve"
                        defaultMessage="Reservations"
                    /></li>
                    <li id="language">
                        <select value={context.locale} onChange={context.selectLanguage}>
                            <option label="EN">en</option>
                            <option label="SL">sl</option>
                            <option label="HR">hr</option>
                            <option label="HU">hu</option>
                            <option label="NL">nl</option>
                        </select>
                    </li>
                </ul>
                <div id="under-main-nav">
                    <div className="poletje-zima">
                        <span id="info-small" onClick={showDetails}>
                            <BsInfoCircle className="icon" />
                        </span>
                        <p>
                            <span><FormattedMessage
                                id = "nav.summer"
                                defaultMessage="Summer"
                            /></span> / <span><FormattedMessage
                                id = "nav.winter"
                                defaultMessage="Winter"
                            /></span>
                        </p>
                    </div>
                    <div className="menu" onClick={showMenu}>
                        <span><TiThMenu /></span>
                    </div>
                </div>
                <div id="info-details">
                    <div className="hide-btn" onClick={hideDetails}>
                        <BsBoxArrowLeft />
                    </div>
                    <Info />
                </div>
                <div id="menu-details">
                    <div className="hide-btn" onClick={hideMenu}>
                        <BsBoxArrowRight />
                    </div>
                    <ul>
                        <li>Nastanitve</li>
                        <li>Wellness</li>
                        <li>Aktivnosti</li>
                        <li>Poslovni dogodki</li>
                        <li>Praznujte na golteh</li>
                        <li>Kako do nas?</li>
                        <li>Za šole in vrtce</li>
                    </ul>
                </div>
                <div id="logo">
                    <NavLink to='/'><img src={logo} /></NavLink>
                </div>
            </div>
        </header>
    )
}

export default Navigation;