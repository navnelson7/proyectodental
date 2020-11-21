import React, { Fragment } from 'react'
import styled from 'styled-components'

function CardsHistorial() {
    return (
        <Fragment>
            <StyleCards>

                <div className="container-cards">
                    <p className="txt-historial"><strong>Historial del paciente</strong></p>
                    <br/>
                    <div className="card-historial">
                        <div className="grid-card-historial">
                            Card
                    </div>
                    </div>
                </div>
            </StyleCards>
        </Fragment>
    )
}

export default CardsHistorial


const StyleCards = styled.div`
.txt-historial{
    font-size: 20px;
}
.container-cards {
    margin-left: 19%;
    margin-top: 50px;
}
.grid-card-historial{
    display: grid;
    grid-template-columns: 50% 50%;
}
.card-historial{
    width: 75%;
    height: auto;
    background-color: white;
    -webkit-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    -moz-box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    box-shadow: 0px 3px 5px -1px rgba(204, 174, 204, 1);
    padding: 10px;
}
`