import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

class ColorToggleButton extends React.Component {

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

  setVal(race) {
    this.setState({ value: race });
  }

  render() {
    return (
      <ToggleButtonGroup onClick={this.props.onClick} color="primary" exclusive value={this.state.value} onChange={this.handleChange}
      >
        <ToggleButton value="zerg">Zerg</ToggleButton>
        <ToggleButton value="terran">Terran</ToggleButton>
        <ToggleButton value="protoss">Protoss</ToggleButton>
      </ToggleButtonGroup>
    );
  }
}

export default ColorToggleButton;