import { gql } from '@apollo/client';


export const savePaciente = gql`
mutation insert_pacientes_one(
    $apellidos: String
    $direccion: String
    $doctor_1: uuid
    $doctor_2: uuid
    $email: String
    $estatus: Boolean
    $fax: String
    $fecha_de_referido: date
    $fecha_nacimiento: date
    $fecha_primera_visita: date
    $fecha_ultima_visita: date
    $gender: String
    $id_familia: uuid
    $id_para_referir: uuid
    $id_referido: uuid
    $idioma: String
    $jefe_de_familia: Boolean
    $mejor_tiempo_para_llamar: timetz
    $miembro_de_familia: Boolean
    $nombres: String
    $pre_medicacion: String
    $profesion: String
    $referido_por_id: uuid
    $telefono: String
    $telefono_trabajo: String
    $titulo: String
){
    insert_pacientes_one(object: {
      apellidos: $apellidos,
      direccion: $direccion,
      doctor_1: $doctor_1,
      doctor_2: $doctor_2,
      email: $email,
      estatus: $estatus,
      fax: $fax,
      fecha_de_referido: $fecha_de_referido,
      fecha_nacimiento: $fecha_nacimiento,
      fecha_primera_visita: $fecha_primera_visita,
      fecha_ultima_visita: $fecha_ultima_visita,
      gender: $gender,
      idioma: $idioma,
      jefe_de_familia: $jefe_de_familia,
      mejor_tiempo_para_llamar: $mejor_tiempo_para_llamar,
      miembro_de_familia: $miembro_de_familia,
      nombres: $nombres,
      pre_medicacion: $pre_medicacion,
      profesion: $profesion,
      telefono:$telefono,
      telefono_trabajo: $telefono_trabajo,
      titulo: $titulo,
      id_familia: $id_familia,
      referido_por_id: $referido_por_id
      id_referido: $id_referido
      id_para_referir: $id_para_referir
    }) {
      id
    }
  }  
`