import React, { Fragment } from "react";
import styled from "styled-components";
import TablaPacientes from "./TablaPacientes";
import backgroundImage from "./background.webp";
import { Link } from "react-router-dom";

function Pacientes() {
  return (
    <Fragment>
      <StyleBackground image={backgroundImage}>
        <div className="color-background">
          <p align="center">
            <strong>Pacientes</strong>
          </p>
          <StyleBtn>
            <div>
              <ul>
                <li>
                  <Link to="/nuevo-paciente">
                    <button className="btn-opcion bg-guardar">
                      <strong>Nuevo Paciente</strong>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <br />
            <br />
          </StyleBtn>
          <TablaPacientes />
        </div>
      </StyleBackground>
    </Fragment>
  );
}

export default Pacientes;

const StyleBtn = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: black;
  }
  .btn-opcion {
    display: inline-block;
    font-weight: 400;
    height: 40px;
    width: 150px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    font-size: 1rem;
    line-height: 1.5;
    /* BORDER RADIUS */
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
  }
  .bg-guardar {
    transition: 0.3s;
    color: black;
    background: white;
  }
  .bg-guardar:hover {
    transition: 0.3s;
    color: #ffffff;
    background: #1f30cc;
  }
`;

const StyleBackground = styled.div`
  .color-background {
    background-image: url(${({ image }) => image});
    height: 200px;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
`;
