import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

// Define a functional component named SearchBox
export default function SearchBox() {
  // Declare a state variable named 'city' and initialize it with an empty string
  let [city, setCity] = useState("");

  // Define a function named 'handleChange' that takes an event object as a parameter
  // This function updates the 'city' state variable with the value entered in the input field
  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  // Define a function named 'handleSubmit' that takes an event object as a parameter
  // This function prevents the default form submission behavior, logs the 'city' value to the console, and resets the 'city' state variable to an empty string
  let handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(city);
    setCity("");
  };

  // Render the SearchBox component
  return (
    // Render a div element with the class name 'SearchBox'
    <div className="SearchBox">
      {/* // Render an h3 element with the text 'Search for the weather' */}
      <h3>Search for the weather</h3>
      {/* // Render a form element with an onSubmit event handler set to the 'handleSubmit' function */}
      <form onSubmit={handleSubmit}>
        {/* // Render a TextField component from the @mui/material package
                // This component is used for inputting the city name
                // It has various props such as id, label, variant, required, value, and onChange */}
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        {/* // Render two line breaks for spacing */}
        <br></br>
        <br></br>
        {/* // Render a Button component from the @mui/material package
                // This component is used for submitting the form
                // It has a variant prop set to 'contained' and a type prop set to 'submit' */}
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
