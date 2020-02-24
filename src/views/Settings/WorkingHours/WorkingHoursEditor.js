// @flow
import React, { useMemo } from 'react'
import EditableHours from './EditableHours'
import { pathOr } from 'ramda'
import moment from 'moment'
import { useMutation, useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { notification, Card, Button } from 'antd'

// Hooks
import { useRestaurant } from '../../../hooks'

// Graphql
import { listWorkHours } from '../../../graphql/queries'
import { updateWorkHour } from '../../../graphql/mutations';

type PropsType = {|
  hourType: String,
  title: String  
|}

const WorkingHoursEditor = ({ hourType, title }:PropsType): React$Node => {

  const restaurant = useRestaurant();
  const { data = { }, loading } = useQuery(gql(listWorkHours), {
    variables: { filter: {
      restaurantId: { eq: restaurant.id}, 
      type: { eq: hourType}
    }, limit: 21 }
  })
  const [update] = useMutation(gql(updateWorkHour))

  const bussinessWorkingHours = useMemo(() => {
    if(loading) {
      return []
    }
    const workingHours = pathOr([], ['listWorkHours', 'items'], data)
    
    return workingHours
      .filter(workingHour => workingHour.type === hourType)
      .map(workingHour => ({
        id: workingHour.id,
        key: workingHour.dayOfWeek,
        day: workingHour.day,
        startAt: moment(`1970-01-01T${workingHour.startAt}.000`),
        endAt: moment(`1970-01-01T${workingHour.endAt}.000`),
      }))
      .sort((a, b) => a.key - b.key)

  }, [data, hourType, loading])

  const save = (values, onSaved) => {
    const promises = values.map(value => update({
      variables: {
        input: {
          id: value.id,
          startAt: value.startAt.format('HH:mm:ss'),
          endAt: value.endAt.format('HH:mm:ss')
        }
      }
    }))

    Promise.all(promises).then(() => {
      onSaved()
      notification.success({ message: 'Done!', description: 'Your changes has been saved!' })
    })
  }

  return !loading ? (
    <Card title={title} headStyle={{ fontWeight: "bold"}}>
      <EditableHours data={bussinessWorkingHours} onSave={save} />
      </Card>
    ) : null
}

export default WorkingHoursEditor