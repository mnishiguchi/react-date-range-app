import React       from 'react'
import moment      from 'moment'
import MainLayout  from './MainLayout'
import DateRange   from './DateRange'

window.moment = moment

// Create date strings
const initialStartDateString = moment().startOf('month').toISOString()
const initialEndDateString = moment().toISOString()

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <DateRange
          initialStartDateString={initialStartDateString}
          initialEndDateString={initialEndDateString}
          startDateInputName="stat[start_date]"
          endDateInputName="stat[end_date]"
        />
      </MainLayout>
    )
  }
}

export default App
