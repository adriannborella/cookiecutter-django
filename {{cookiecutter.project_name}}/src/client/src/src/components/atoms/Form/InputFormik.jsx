import { ErrorMessage, useField } from 'formik';


export default function InputFormik({ label, ...props } ) {
    const [ field ] = useField(props)

    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <input className="text-input" { ...field } { ...props } />
            <ErrorMessage name={ props.name } component="span" />
        </>
    )
}
