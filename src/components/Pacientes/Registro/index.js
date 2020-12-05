import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { StyleInput, StyleSwitch } from "../../../styles/StyleInput";
import ButtonsDesitions from "../../ButtonsDesitions";
import { useMutation } from "@apollo/client";
import { savePaciente } from "../../../graphql/Mutations";
import Alert, { showAlert } from "../../Alert";
import { useHistory } from "react-router-dom";


function Registro() {
  const { push } = useHistory();

  const [textAlert, settextAlert] = useState("");
  const [NuevoPaciente, setNuevoPaciente] = useState({
    apellidos: "",
    direccion: "",
    doctor_1: "3b241101-e2bb-4255-8caf-4136c566a962",
    doctor_2: "3b241101-e2bb-4255-8caf-4136c566a962",
    email: "",
    estatus: false,
    fax: "test",
    fecha_de_referido: new Date().toISOString().substr(0, 10),
    fecha_nacimiento: "",
    fecha_primera_visita: new Date().toISOString().substr(0, 10),
    fecha_ultima_visita: new Date().toISOString().substr(0, 10),
    gender: "",
    id_familia: "3b241101-e2bb-4255-8caf-4136c566a962",
    id_para_referir: "3b241101-e2bb-4255-8caf-4136c566a962",
    id_referido: "3b241101-e2bb-4255-8caf-4136c566a962",
    idioma: "",
    jefe_de_familia: false,
    mejor_tiempo_para_llamar: "",
    miembro_de_familia: false,
    nombres: "",
    pre_medicacion: "",
    profesion: "",
    referido_por_id: "3b241101-e2bb-4255-8caf-4136c566a962",
    telefono: "",
    telefono_trabajo: "",
    titulo: "",
  });

  const changePaciente = e => {
    const name = e.target.name
    if (name === "estatus" || name === "jefe_de_familia" || name === "miembro_de_familia") {
      setNuevoPaciente({
        ...NuevoPaciente,
        [e.target.name]: e.target.checked
      })
    } else {
      setNuevoPaciente({
        ...NuevoPaciente,
        [e.target.name]: e.target.value
      })
    }
  }
  const [addPaciente] = useMutation(savePaciente);

  const submitPaciente = e => {
    e.preventDefault()
    addPaciente({
      variables: NuevoPaciente
    }).then(res => {
      if (res.data) {
        settextAlert('Paciente registrado correctamnte')
        showAlert()
        setTimeout(() => {
          //si todo va bien lo redirecciona al inicio
          push("/pacientes");
        }, 2000);
      }
    })
      .catch(err => console.log(err))
  }
  return (
    <Fragment>
      <Alert text={textAlert} />
      <br />
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
                    name="nombres"
                    onChange={e => changePaciente(e)}
                    value={NuevoPaciente.nombres}
                  />
                </div>
                <div>
                  <p>Apellidos</p>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Apellidos"
                    name="apellidos"
                    onChange={e => changePaciente(e)}
                    value={NuevoPaciente.apellidos}
                  />
                </div>
                <div>
                  <p>Correo</p>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Nombres"
                    name="email"
                    onChange={e => changePaciente(e)}
                    value={NuevoPaciente.email}
                  />
                </div>
                <div>
                  <label>
                    Género
                  <select className="form-input"
                      name="gender"
                      onChange={e => changePaciente(e)}
                      value={NuevoPaciente.gender}
                    >
                      <option value="">Selecciona el género</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                      <option value="Indefinido">Indefinido</option>
                    </select>
                  </label>
                </div>

                <div>
                  <p>Titulo</p>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Titulo"
                    name="titulo"
                    onChange={e => changePaciente(e)}
                    value={NuevoPaciente.titulo}
                  />
                </div>
                <div>
                  <p>Mejor tiempo para llamar</p>
                  <input
                    type="time"
                    className="form-input"
                    placeholder="Mejor tiempo para llamar"
                    name="mejor_tiempo_para_llamar"
                    onChange={e => changePaciente(e)}
                    value={NuevoPaciente.mejor_tiempo_para_llamar}
                  />
                </div>
                <div>
                  <p>Estado</p>
                  <br />
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" name="estatus" value={NuevoPaciente.estatus} checked={NuevoPaciente.estatus} onChange={e => changePaciente(e)} />
                    <span className="slider round" />
                  </label>
                </div>

                <div>
                  <p>Dirección</p>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Dirección"
                    name="direccion"
                    onChange={e => changePaciente(e)}
                    value={NuevoPaciente.direccion}
                  />
                </div>

                <div>
                  <p>Fecha de nacimiento</p>
                  <input
                    type="date"
                    className="form-input"
                    placeholder="Fecha de nacimiento"
                    onChange={e => changePaciente(e)}
                    name="fecha_nacimiento"
                    value={NuevoPaciente.fecha_nacimiento}
                  />
                </div>
                <div>
                  <p>Fecha de primera vista</p>
                  <input
                    type="date"
                    className="form-input"
                    placeholder="Fecha de primera vista"
                    onChange={e => changePaciente(e)}
                    value={NuevoPaciente.fecha_primera_visita}
                  />
                </div>
                <div>
                  <p>Referido por</p>
                  <select className="form-input" value={NuevoPaciente.referido_por_id} onChange={e => changePaciente(e)}>
                    <option value="doctor">doctor</option>
                    <option value="doctor">doctor</option>
                    <option value="doctor">doctor</option>
                    <option value="doctor">doctor</option>
                  </select>
                </div>
                <div>
                  <p>Fecha de Referido</p>
                  <input
                    type="date"
                    className="form-input"
                    placeholder="Fecha de Referido"
                    value={NuevoPaciente.fecha_de_referido}
                    name="fecha_de_referido"
                    onChange={e => changePaciente(e)}
                  />
                </div>
                <div>
                  <p>Telefono</p>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="Telefono"
                    onChange={e => changePaciente(e)}
                    name="telefono"
                    value={NuevoPaciente.telefono}
                  />
                </div>
                <div>
                  <p>Teléfono de trabajo</p>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="Telefono de trabajo"
                    name="telefono_trabajo"
                    onChange={e => changePaciente(e)}
                  />
                </div>
                <div>
                  <p>Idioma</p>
                  <select className="form-input" name="idioma"
                    value={NuevoPaciente.idioma}
                    onChange={e => changePaciente(e)}
                  >
                    <option value="">Selecciona el idioma</option>
                    <option value="Español">Español</option>
                    <option value="Inglés">Inglés</option>
                  </select>
                </div>
                <div>
                  <p>Pre medicación</p>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Pre medicacion"
                    name="pre_medicacion"
                    onChange={e => changePaciente(e)}
                  />
                </div>
                <div>
                  <label>
                    Profesión
                  <input
                      type="text"
                      className="form-input"
                      placeholder="Profesión"
                      name="profesion"
                      value={NuevoPaciente.profesion}
                      onChange={e => changePaciente(e)}
                    />
                  </label>
                </div>
                <div>
                  <p>Jefe de familia</p>
                  <br />
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox" name="jefe_de_familia"
                      value={NuevoPaciente.jefe_de_familia}
                      checked={NuevoPaciente.jefe_de_familia}
                      onChange={e => changePaciente(e)} />
                    <span className="slider round" />
                  </label>
                </div>
                <div>
                  <p>Miembro de familia</p>
                  <br />
                  {/* Rounded switch */}
                  <label className="switch">
                    <input type="checkbox"
                      value={NuevoPaciente.miembro_de_familia}
                      name="miembro_de_familia"
                      checked={NuevoPaciente.miembro_de_familia}
                      onChange={e => changePaciente(e)} />
                    <span className="slider round" />
                  </label>
                </div>
                <div>
                  <label>
                    Fax
                  <input
                      type="text"
                      className="form-input"
                      placeholder="Fax"
                      name="fax"
                      onChange={e => changePaciente(e)}
                      value={NuevoPaciente.fax}
                    />
                  </label>
                </div>
              </div>
            </StyleSwitch>
          </StyleInput>
          <br />
          <ButtonsDesitions linkCancel="/pacientes" submitSave={submitPaciente} />
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
