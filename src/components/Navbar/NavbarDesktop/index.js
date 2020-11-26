import React, { Fragment } from 'react'
import styled from 'styled-components';
import { useLocation, Link } from "react-router-dom";

function NavbarDesktop() {
    let { pathname } = useLocation();

    return (
        <Fragment>
            <StyleNavbarDesktop>

                {/* SIDEBAR DESKTOP */}
                <div className="wrapper-left">
                    <div className="sidebar-left">
                        <br />
                        <Link to="/">
                            <div className={`grid-sidebar ${pathname === "/" ? "bg-active" : "bg-no-active"}`} style={{ marginTop: '12px' }}>
                                <div className="icon-sidebar-align">
                                    <span className="material-icons">
                                        home
                                </span>
                                </div>
                                <div>
                                    <p style={{ marginTop: '4px' }}>Inicio</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/pacientes">
                            <div className={`grid-sidebar ${pathname === "/pacientes" ? "bg-active" : "bg-no-active"}`}>
                                <div className="icon-sidebar-align">
                                    <span className="material-icons">
                                        groups
                                </span>
                                </div>
                                <div>
                                    <p style={{ marginTop: '4px' }}>Pacientes</p>
                                </div>
                            </div>
                        </Link>
                        <div className="grid-sidebar bg-no-active">
                            <div className="icon-sidebar-align">
                                <span className="material-icons">
                                    games
              </span>
                            </div>
                            <div>
                                <p style={{ marginTop: '4px' }}>Test</p>
                            </div>
                        </div>
                        <br /><br /><br />
                        <div className="grid-sidebar bg-no-active">
                            <div className="icon-sidebar-align">
                                <span className="material-icons">
                                    shop
              </span>
                            </div>
                            <div>
                                <p style={{ marginTop: '4px' }}>test</p>
                            </div>
                        </div>
                        <div className="grid-sidebar bg-no-active">
                            <div className="icon-sidebar-align">
                                <span className="material-icons">
                                    contacts
              </span>
                            </div>
                            <div>
                                <p style={{ marginTop: '4px' }}>test</p>
                            </div>
                        </div>

                    </div>
                </div>
            </StyleNavbarDesktop>
        </Fragment>
    )
}

export default NavbarDesktop;

const StyleNavbarDesktop = styled.div`
/* SIDEBAR DESKTOP */

.wrapper-left {
    display: flex;
    position: relative;
}

.wrapper-left .sidebar-left {
    position: fixed;
    width: 240px;
    height: 100%;
    background-color: #ffffff;
}

.grid-sidebar {
    display: grid;
    grid-template-columns: 30% 70%;
    margin-bottom: 5px;
    padding-top: 7px;
    padding-bottom: 7px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 10px;
}

.icon-sidebar-align {
    display: flex;
    justify-content: center;
    align-items: center;
}

.bg-active {
    background-color: #8338EC;
    font-weight: bold;
    color: white;
}

.bg-no-active {
    transition: 0.5s;
    color: black;
}

.bg-no-active:hover {
    transition: 0.5s;
    background-color: #5D4CA0;
    font-weight: bold;
    color: rgb(255, 255, 255);
    cursor: pointer;
}
`
