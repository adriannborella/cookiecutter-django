import React from 'react'
import InputFormik from '../../components/atoms/Form/InputFormik';
import './styles.css'


export function CustomerForm() {
  return (
    <>
        <InputFormik label='First Name' name='first_name' placeholder="Plase enter a name" />
        <InputFormik label='Last Name' name='last_name' placeholder="Plase enter a last name" />
        <InputFormik label='Document Number' name='document_number' placeholder="DNI | CUIT | Other" />
        <InputFormik label='Phone' name='phone' placeholder="+54 (341) 3587452" />
    </>
  )
}

