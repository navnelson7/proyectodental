import React, { Fragment } from "react";
import styled from "styled-components";

function CardsPacientes() {
  return (
    <Fragment>
      <StyleCards>
        <div class="container-cards">
          <br />
          <p>
            <strong>Consultas próximas</strong>
          </p>
          <br />
          <div class="grid-cards">
            <div class="card-youtube">
              <div class="grid-head-card">
                <div>
                  <img
                    src="https://pbs.twimg.com/profile_images/1315309188550139904/1kiSQSJN_400x400.jpg"
                    alt=""
                    className="img-profile-card"
                  />
                </div>
                <div>
                  <p className="title-name-card">
                    <strong>Nelson Hernandez</strong>
                  </p>
                  <p>Sonsonate</p>
                </div>
              </div>
              <div class="grid-body-card">
                <div>
                  <p className="title-hour-card">
                    <strong>10:30 am</strong>
                  </p>
                </div>
                <div>
                  <p className="fecha-txt">20/10/2020</p>
                </div>
              </div>
              <div className="view-details">
                <StyleButton>
                  <button className="button-view-details">
                    <strong>Ver detalles</strong>
                  </button>
                </StyleButton>
              </div>
            </div>

            <div class="card-youtube">
              <div class="grid-head-card">
                <div>
                  <img
                    src="https://pbs.twimg.com/profile_images/1315309188550139904/1kiSQSJN_400x400.jpg"
                    alt=""
                    className="img-profile-card"
                  />
                </div>
                <div>
                  <p className="title-name-card">
                    <strong>Nelson Hernandez</strong>
                  </p>
                  <p>Sonsonate</p>
                </div>
              </div>
              <div class="grid-body-card">
                <div>
                  <p className="title-hour-card">
                    <strong>10:30 am</strong>
                  </p>
                </div>
                <div>
                  <p className="fecha-txt">20/10/2020</p>
                </div>
              </div>
              <div className="view-details">
                <StyleButton>
                  <button className="button-view-details">
                    <strong>Ver detalles</strong>
                  </button>
                </StyleButton>
              </div>
            </div>

            <div class="card-youtube">
              <div class="grid-head-card">
                <div>
                  <img
                    src="https://pbs.twimg.com/profile_images/1315309188550139904/1kiSQSJN_400x400.jpg"
                    alt=""
                    className="img-profile-card"
                  />
                </div>
                <div>
                  <p className="title-name-card">
                    <strong>Nelson Hernandez</strong>
                  </p>
                  <p>Sonsonate</p>
                </div>
              </div>
              <div class="grid-body-card">
                <div>
                  <p className="title-hour-card">
                    <strong>10:30 am</strong>
                  </p>
                </div>
                <div>
                  <p className="fecha-txt">20/10/2020</p>
                </div>
              </div>
              <div className="view-details">
                <StyleButton>
                  <button className="button-view-details">
                    <strong>Ver detalles</strong>
                  </button>
                </StyleButton>
              </div>
            </div>

            <div class="card-youtube">
              <div class="grid-head-card">
                <div>
                  <img
                    src="https://pbs.twimg.com/profile_images/1315309188550139904/1kiSQSJN_400x400.jpg"
                    alt=""
                    className="img-profile-card"
                  />
                </div>
                <div>
                  <p className="title-name-card">
                    <strong>Nelson Hernandez</strong>
                  </p>
                  <p>Sonsonate, sonzacate, El Sauce</p>
                </div>
              </div>
              <div class="grid-body-card">
                <div>
                  <p className="title-hour-card">
                    <strong>10:30 am</strong>
                  </p>
                </div>
                <div>
                  <p className="fecha-txt">20/10/2020</p>
                </div>
              </div>
              <div className="view-details">
                <StyleButton>
                  <button className="button-view-details">
                    <strong>Ver detalles</strong>
                  </button>
                </StyleButton>
              </div>
            </div>
          </div>
        </div>
      </StyleCards>
    </Fragment>
  );
}

export default CardsPacientes;

const StyleCards = styled.div`
  /*CARDS*/
  .grid-body-card {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .grid-head-card {
    display: grid;
    grid-template-columns: 40% 60%;
    margin-top: 10px;
  }
  .title-hour-card {
    font-size: 25px;
  }
  .title-name-card {
    font-size: 20px;
  }
  .fecha-txt {
    font-size: 16px;
    margin-top: 9px;
  }
  .view-details {
    width: 100%;
    border-top: 1px solid #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* MOBILE */
  @media (max-width: 1025px) {
    .container-cards {
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 50px;
    }
    .grid-cards {
      display: grid;
      grid-template-columns: 100%;
    }
    .card-youtube {
      width: 100%;
      height: 200px;
      background-color: white;
      padding: 10px;
    }
    .img-profile-card {
      height: 80px;
      width: 80px;
      border-radius: 50%;
    }
  }

  /* DESKTOP */
  @media (min-width: 720px) {
    .container-cards {
      margin-left: 5%;
    }
    .grid-cards {
      display: grid;
      grid-template-columns: 33.33% 33.33% 33.33%;
    }
    .card-youtube {
      width: 250px;
      height: auto;
      background-color: white;
      -webkit-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
      -moz-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
      box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
      padding: 10px;
    }
    .img-profile-card {
      height: 80px;
      width: 80px;
      border-radius: 50%;
    }
  }
  /* DESKTOP */
  @media (min-width: 1025px) {
    .container-cards {
      margin-left: 19%;
    }
    .grid-cards {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
    }
    .card-youtube {
      width: 250px;
      height: auto;
      background-color: white;
      -webkit-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
      -moz-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
      box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
      padding: 10px;
    }
    .img-profile-card {
      height: 80px;
      width: 80px;
      border-radius: 50%;
    }
  }
`;

const StyleButton = styled.div`
  .button-view-details {
    display: inline-block;
    font-weight: 400;
    color: #ffffff;
    height: 35px;
    width: auto;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 5px;
    border: 0px solid #000000;
    cursor: pointer;
    background-color: #131031;
    margin-top: 10px;
    transition: 0.5s;
  }
  .button-view-details:hover {
    transition: 0.5s;
    background-color: #4361ee;
  }
`;
