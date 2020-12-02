import React, { Fragment } from "react";
import styled from "styled-components";
import { StyleInput, StyleSwitch } from "../../../styles/StyleInput";

function Registro() {
  return (
    <Fragment>
      <StyleRegistroPaciente>
        <div className="container-left">
          <StyleInput>
            <StyleSwitch>
              <div className="grid-form">
                <div>
                  <p>Nombres</p>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Nombres"
                  />
                </div>
                <div>
                  <p>Apellidos</p>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Apellidos"
                  />
                </div>
                <div>
                  <p>Género</p>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Género"
                  />
                </div>

                <div>
                  <p>Titulo</p>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Titulo"
                  />
                </div>
                <div>
                  <p>Mejor tiempo para llamar</p>
                  <input
                    type="time"
                    className="form-input"
                    placeholder="Mejor tiempo para llamar"
                  />
                </div>
                <div>
                  <p>Estado</p>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Estado"
                  />
                </div>

                <div>
                  <p>Direccion</p>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Direccion"
                  />
                </div>

                <div>
                  <p>Fecha de nacimiento</p>
                  <input
                    type="date"
                    className="form-input"
                    placeholder="Fecha de nacimiento"
                  />
                </div>
                <div>
                  <p>Fecha de primera vista</p>
                  <input
                    type="date"
                    className="form-input"
                    placeholder="Fecha de primera vista"
                  />
                </div>
                <div>
                  <p>Referido por</p>
                  <select className="form-input">
                    <option value="volvo">doctor</option>
                    <option value="saab">doctor</option>
                    <option value="mercedes">doctor</option>
                    <option value="audi">doctor</option>
                  </select>
                </div>
                <div>
                  <p>Fecha de Referido</p>
                  <input
                    type="date"
                    className="form-input"
                    placeholder="Fecha de Referido"
                  />
                </div>
                <div>
                  <p>Telefono</p>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="Telefono"
                  />
                </div>
                <div>
                  <p>Telefono de trabajo</p>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="Telefono de trabajo"
                  />
                </div>
                <div>
                  <p>Idioma</p>
                  <select className="form-input">
                    <option value="volvo">Español</option>
                    <option value="saab">Ingles</option>
                  </select>
                </div>
                <div>
                  <p>Pre medicacion</p>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Pre medicacion"
                  />
                </div>
                <div>
                  <p>Profesion</p>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Profesion"
                  />
                </div>
                <div>
                  <p>Jefe de familia</p>
                  <br />
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
                <div>
                  <p>Miembro de familia</p>
                  <br />
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
            </StyleSwitch>
          </StyleInput>
        </div>
      </StyleRegistroPaciente>
    </Fragment>
  );
}

export default Registro;

const StyleRegistroPaciente = styled.div`
  /* DESKTOP */
  @media (min-width: 1025px) {
    .container-left {
      margin-left: 20%;
      width: 75%;
    }
    .grid-form {
      display: grid;
      grid-template-columns: 33.33% 33.33% 33.33%;
      grid-gap: 1%;
      margin-left: 10px;
      margin-right: 5px;
    }
  }
  /* DESKTOP */
  @media (min-width: 1920px) {
    .container-left {
      margin-left: 13%;
    }
    .grid-form {
      display: grid;
      grid-template-columns: 33.33% 33.33% 33.33%;
      grid-gap: 1%;
      margin-left: 10px;
      margin-right: 5px;
    }
  }
`;
