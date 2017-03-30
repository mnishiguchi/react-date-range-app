import React, { PropTypes as T } from 'react'
import moment from 'moment'

import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

class DateRange extends React.Component {

  // The *InputName prop is the input name that the app server wants to use.
  // For the initial range, we specify either Initial*Date or Initial*DateString props.
  static propTypes = {
    startDateInputName    : T.string,
    endDateInputName      : T.string,
    initialStartDateString: T.string, // date as a string
    initialEndDateString  : T.string, // date as a string
    initialStartDate      : T.object, // moment object
    initialEndDate        : T.object, // moment object
  }

  static defaultProps = {
    startDateInputName: 'start_date',
    endDateInputName:   'end_date',
  }

  constructor(props) {
    super(props)

    this.state = {
      focusedInput:   null,  // "startDate" or "endDate"
      startDate:      props.initialStartDate || moment(props.initialStartDateString), // fallback value is time now
      endDate:        props.initialEndDate   || moment(props.initialEndDateString), // fallback value is time now
    }

    this.onDatesChange = this.onDatesChange.bind(this)
    this.onFocusChange = this.onFocusChange.bind(this)
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate })
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput })
  }

  render() {
    const { startDateInputName, endDateInputName } = this.props
    const { focusedInput, startDate, endDate } = this.state

    // http://airbnb.io/react-dates
    // https://github.com/airbnb/react-dates/tree/master/stories
    return (
      <div>
        {/* We can make these fields be hidden fields and send form information through those fields in a real app. */}
        <div style={{ margin: '1rem 0' }}>
          <label className="col-sm-6">
            <pre>{startDateInputName}</pre>
            <input type="text" name={startDateInputName} value={startDate ? startDate.toISOString() || '' : ''} readOnly className="form-control" />
          </label>
          <label className="col-sm-6">
            <pre>{endDateInputName}</pre>
            <input type="text" name={endDateInputName} value={endDate ? endDate.toISOString() || '' : ''} readOnly className="form-control" />
          </label>
        </div>

        <DateRangePicker
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
          isOutsideRange={() => false}
          orientation='horizontal'
          showClearDates
          reopenPickerOnClearDates
        />
      </div>
    )
  }
}

export default DateRange
