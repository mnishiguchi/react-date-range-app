import React, { PropTypes as T } from 'react'
import moment                    from 'moment'
import DatePicker                from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class DateRange extends React.Component {
  // The *InputName prop is the input name that the app server wants to use.
  // For the initial range, we specify either Initial*Date or Initial*DateString props.
  static propTypes = {
    startDateInputName:     T.string,
    endDateInputName:       T.string,
    initialStartDateString: T.string, // date as a string
    initialEndDateString:   T.string, // date as a string
    initialStartDate:       T.object, // moment object
    initialEndDate:         T.object, // moment object
  }

  static defaultProps = {
    startDateInputName: 'start_date',
    endDateInputName:   'end_date',
  }

  constructor(props) {
    super(props)

    this.state = {
      startDate: props.initialStartDate || moment(props.initialStartDateString), // fallback value is time now
      endDate:   props.initialEndDate   || moment(props.initialEndDateString),   // fallback value is time now
    }
  }

  render() {
    const { startDateInputName, endDateInputName } = this.props
    const { startDate, endDate } = this.state

    return (
      <div>
        {/* We can make these fields be hidden fields and send form information through those fields in a real app. */}
        <div style={{ margin: '1rem 0' }}>
          <label className="col-sm-6">
            <strong>{startDateInputName}</strong>
            <input
              readOnly
              type="text"
              name={startDateInputName}
              value={startDate ? startDate.toISOString() || '' : ''}
              className="form-control"
              ref={node => this.startDateNode = node}
            />
          </label>
          <label className="col-sm-6">
            <strong>{endDateInputName}</strong>
            <input
              readOnly
              type="text"
              name={endDateInputName}
              value={endDate ? endDate.toISOString() || '' : ''}
              className="form-control"
              ref={node => this.endDateNode = node}
            />
          </label>
        </div>

        <label style={{margin:'0 10px 10px'}}>
          Start Date
          <DatePicker selected={startDate} onChange={startDate => this.handleChange({ startDate: moment(startDate) })} />
        </label>
        <label>
          End Date
          <DatePicker selected={endDate} onChange={endDate => this.handleChange({ endDate: moment(endDate) })} />
        </label>
      </div>
    )
  }

  handleChange(payload) {
    this.setState((prevState, props) => {
      return {
        ...prevState,
        ...payload
      }
    }, () => {
      const { startDate, endDate } = this.state

      // Validate the date strings
      var isStartDateValid = startDate.isValid()
      var isEndDateValid   = endDate.isValid()
      var isValidRange     = startDate < endDate

      if (isStartDateValid && isEndDateValid && isValidRange) {
        window.toastr.success('Valid date range')

        // TODO: DO some business here

      }

      if (!isStartDateValid) {
        window.toastr.error('Invalid start date')
      }

      if (!isEndDateValid) {
        window.toastr.error('Invalid end date')
      }

      if (!isValidRange) {
        window.toastr.error('Invalid date range')
      }
    })
  }
}

export default DateRange
