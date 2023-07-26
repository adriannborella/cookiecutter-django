import React from 'react'
import { Formik, Form } from 'formik';
import { Button, ButtonGroup } from 'react-bootstrap';

export function FormData({onHandleSave, onHandleCancel, validationSchema, initialValues, children}) {
  return (
    <Formik
          initialValues={initialValues}
          onSubmit={ async ( values, { setSubmitting } ) => {
              await onHandleSave(values)
              setSubmitting(false);
          }}
          validate={values => {
              return null
          }}
          validationSchema={validationSchema}
          >
          {({
              isSubmitting
          }) => (
              <Form>
                    <div>
                        <ButtonGroup className="mb-2">
                            <Button variant='success' disabled={isSubmitting} type='submit'>Save</Button>
                            <Button variant='danger' disabled={isSubmitting} onClick={onHandleCancel}>Cancel</Button>
                        </ButtonGroup>
                    </div>
                    <hr />
                    {children}
              </Form>
          )}
      </Formik>
  )
}
