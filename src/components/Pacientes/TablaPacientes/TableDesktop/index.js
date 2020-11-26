import React from "react";
import styled from "styled-components";
import SearchTable from "../SearchTable";

function TableDesktop() {
  return (
    <div>
      <StyleTablePacientes>
        <div className="container-left">
          <div className="card-table">
            <SearchTable />
            <br />
            {/* HEAD TABLE */}
            <div className="grid-table">
              <div>
                <p>
                  <strong>Nombre</strong>
                </p>
              </div>
              <div>
                <p>
                  <strong>Apellido</strong>
                </p>
              </div>
              <div>
                <p>
                  <strong>Género</strong>
                </p>
              </div>
              <div>
                <p>
                  <strong>Correo</strong>
                </p>
              </div>
              <div>
                <p>
                  <strong>Dirección</strong>
                </p>
              </div>
              <div>
                <p>
                  <strong>Teléfono Móvil</strong>
                </p>
              </div>
              <div>
                <p>
                  <strong>Ultima Visita</strong>
                </p>
              </div>
              <div></div>
            </div>
            {/* BODY TABLE */}
            <div className="grid-table hover-row">
              <div>
                <p>Nelson Adonis</p>
              </div>
              <div>
                <p>Hernandez</p>
              </div>
              <div>
                <p>Masculino</p>
              </div>
              <div>
                <p>dental@gmail.com</p>
              </div>
              <div>
                <p>Sonsonate</p>
              </div>
              <div>
                <p>70107689</p>
              </div>
              <div>
                <p>Hace una semana</p>
              </div>

              <div>
                <div className="flex-icons-right">
                  <div className="grid-icons-right">
                    <div
                      className="box-icons-right icon-hover"
                      title="Añadir proveedor"
                    >
                      <svg
                        className="icon-table"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                      </svg>
                    </div>
                    <div
                      className="box-icons-right icon-hover"
                      title="Añadir proveedor"
                    >
                      <svg
                        className="icon-table"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18px"
                        height="18px"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            
          </div>
        </div>
      </StyleTablePacientes>
    </div>
  );
}

export default TableDesktop;

const StyleTablePacientes = styled.div`
  .card-table {
    width: 95%;
    margin-left: 2%;
    margin-right: 2%;
    height: 100vh;
    background-color: white;
    -webkit-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    -moz-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    border-radius: 2%;
  }
  .icon-table {
    fill: transparent;
  }
  .hover-row {
    transition: 0.5s;
  }
  .hover-row:hover {
    transition: 0.5s;
    background: #f1f3f4;
  }
  .hover-row:hover .icon-table {
    transition: 0.5s;
    fill: black;
  }

  /* ICONS RIGHT */
  .flex-icons-right {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .grid-icons-right {
    display: grid;
    grid-template-columns: auto auto auto;
  }
  .box-icons-right {
    margin-right: 10px;
    margin-left: 10px;
    height: 35px;
    width: 35px;
    border-radius: 50px;
    text-align: center;
    cursor: pointer;
  }
  .box-icons-right:hover {
    background-color: #e6ecf0;
  }
  .mt-icons {
    margin-top: 4px;
  }

  /* DESKTOP */
  @media (min-width: 1025px) {
    .container-left {
      margin-left: 20%;
    }
    .grid-table {
      display: grid;
      grid-template-columns: 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
      padding: 10px;
      text-align: center;
    }
  }
  /* DESKTOP */
  @media (min-width: 1920px) {
    .container-left {
      margin-left: 13%;
    }
    .grid-table {
      display: grid;
      grid-template-columns: 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
      padding: 10px;
      text-align: center;
    }
  }
`;
