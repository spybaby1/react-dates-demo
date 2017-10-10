import React, { Component } from 'react'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { DateRangePicker } from 'react-dates'
import moment from 'moment'

export default class ReactDatesDemo extends Component {
  state = {
    startDate: moment(),
    endDate: moment(),
    focusedInput: 'startDate'
  }



  render () {
    const { startDate, endDate, focusedInput } = this.state
    const { displayFormat = 'DD/MM/YYYY' } = this.props
    return (
      <div>
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          displayFormat={displayFormat}
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
          focusedInput={focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
        />
      </div>
    )
  }
}
