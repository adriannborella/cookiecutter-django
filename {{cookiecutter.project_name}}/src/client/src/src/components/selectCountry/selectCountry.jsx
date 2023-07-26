import React, { useCallback, useEffect, useState } from 'react'
import { useApi } from '../../api'
import Form from 'react-bootstrap/Form';


export function SelectCountry({onChange}) {
    const {getCountries} = useApi()
    const [data, setData] = useState([])

    const fillCountries = useCallback(
      async () => {
        const response = await getCountries()
        setData(response)
      },
      [],
    )

    useEffect(() => {
      fillCountries()
    }, [])

    const handleChange = (value) => {
        onChange(value.target.value)
    }

    return (
        <>
            <Form.Select aria-label="Default select example" onChange={handleChange}>
                <option value=''>Select a Country</option>
                {
                data.map((item, index) => { 
                 return (<option key={item.countryCode} value={item.countryCode}>{item.name}</option>)})}
            </Form.Select>
        </>
    )
}
