import { gql } from '@apollo/client';


export const listenPacientes = gql`
subscription pacientes($limit: Int, $offset: Int){
    pacientes(
        limit: $limit
        offset: $offset
      ){
      nombres
      apellidos
      gender
      email
      id
      direccion
      telefono
      fecha_ultima_visita
    }
  }
`