import React from 'react'
import { CustomCalendar, SelectCountry } from '../../components'
import { useLongWeekends } from './hooks/useLongWeekends'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Title, Loading, CardBody } from '../../components/atoms';


export function LongWeekendsPage() {
  const {data, refreshData, isLoading} = useLongWeekends()

  const HandleChangeCountry = (value) => {
    refreshData(value)
  }

  const RenderCalendarSection = () => {
    if (isLoading) return <Loading />
    return data.length == 0 ? <CardBody text="Please Select a country first" /> : <CustomCalendar events={data} /> 
  }

  return (
    <Row>
      <Col>
        <Title title='LongWeekends!!' />
        <SelectCountry onChange={HandleChangeCountry}></SelectCountry>
        <hr />
        <RenderCalendarSection />
      </Col>
    </Row>
  )
}
