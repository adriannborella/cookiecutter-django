import React from 'react'
import { Crud } from '../../components';
import { CustomerForm } from './CustomerForm';
import { useService } from '../../api';
import * as Yup from 'yup';

export function CustomerPage() {
    const { customerService } = useService()

    const display_fields = {
        "id": {title: "#"},
        "first_name": {title: "First Name"},
        "last_name": {title: "Last Name"},
        "document_number": {title: "Document Number"},
        "phone": {title: "Phone"}
    }

    const initialValuesCustom = {
        first_name:"",
        last_name:"",
        document_number:"",
        phone:""
    }

    const customValidationSchema = Yup.object({
        first_name: Yup.string()
         .max(15, 'Must be 15 characters or less')
         .required('Required'),
        last_name: Yup.string()
         .max(20, 'Must be 20 characters or less')
         .required('Required'),
        document_number: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
        phone: Yup.string().max(25, "Must be 25 characters or less").required("Required")
     })

    return (
        <Crud
            dataSource={customerService}
            title="Customer"
            displayFields={display_fields}
            validationSchema={customValidationSchema}
            initialValues={initialValuesCustom}
        >
            <CustomerForm />
        </Crud>
    )
}
