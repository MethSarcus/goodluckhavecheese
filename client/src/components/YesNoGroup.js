import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

class YesNoGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: null}
    this.setVal = this.setVal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event, newVal) {
    if (newVal != null) {
      this.setVal(newVal);
    }
  };

  setVal(val) {
    this.setState({ value: val });
  }

  render() {
    return (
      <ToggleButtonGroup
        color="primary"
        value={this.state.value}
        exclusive
        onChange={this.handleChange}
        onClick={this.props.onClick}
      >
        <ToggleButton value = {true} >Yes</ToggleButton>
        <ToggleButton value= {false} >No</ToggleButton>
      </ToggleButtonGroup>
    );
  }
}

export default YesNoGroup;