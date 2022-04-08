import * as React from "react";
import ButtonGroupHeader from "./ButtonGroupHeader";
import { Grid } from "@mui/material";
import ColorToggleButton from "./RaceSelectionGroup";
import YesNoGroup from "./YesNoGroup";
import { Button } from "@mui/material";

class ResponseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      race: null,
      glhf: null,
      cheese: null,
    };
    this.setRace = this.setRace.bind(this);
    this.setGLHF = this.setGLHF.bind(this);
    this.setCheese = this.setCheese.bind(this);
    this.getCurrentState = this.getCurrentState.bind(this);
    this.sendFormResponse = this.sendFormResponse.bind(this);
  }

  setRace(clickEvent) {
    var race = clickEvent.target.value;
    this.setState({ race: race });
  }

  setGLHF(clickEvent) {
    var glhf = clickEvent.target.value;
    this.setState({ glhf: glhf });
  }

  setCheese(clickEvent) {
    var cheese = clickEvent.target.value;
    this.setState({ cheese: cheese });
  }

  getCurrentState() {
    console.log(this.state.value);
    return this.state;
  }

  sendFormResponse() {
    var data = this.getCurrentState();

    if (data.race == null || data.cheese == null || data.glhf == null) {
      return;
    }
    const requestOptions = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      json: true,
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "origin", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    };

    fetch("http://localhost:5001/", requestOptions).then(function (response) {

      return response.json();
    }).then(function (response) {
      if (response.acknowledged) {
        alert("Data submitted");
      }
    });


  }

  render() {
    return (
      <Grid sx={{ flexGrow: 1 }} container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <ButtonGroupHeader id="race_button" header_name="Race" />
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <ColorToggleButton onClick={this.setRace} />
        </Grid>

        <Grid item xs={12}>
          <ButtonGroupHeader id="glhf_button" header_name="Said GL HF" />
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <YesNoGroup onClick={this.setGLHF} />
        </Grid>

        <Grid item xs={12}>
          <ButtonGroupHeader id="cheese_button" header_name="Cheesed" />
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <YesNoGroup onClick={this.setCheese} />
        </Grid>

        <Grid container item xs={4} justifyContent="center">
          <Button variant="contained" onClick={this.sendFormResponse}>
            Submit
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default ResponseForm;
