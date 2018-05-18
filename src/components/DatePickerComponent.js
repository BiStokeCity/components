import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
class DatePickerComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // khi render ra sẽ hiển thị ngày hiện tại luôn trên input
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    console.log(date);
    this.setState({
      startDate: date
    });
  }

  render() {
    return <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
          />;
    }
  }
export default DatePickerComponent;
