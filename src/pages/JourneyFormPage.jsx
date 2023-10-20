import React from "react";

function JourneyFormPage() {
  return (
    <div>
      <h1>Journey Form Page</h1>
      <form>
        <label htmlFor="origin">Origin:</label>
        <input type="text" id="origin" name="origin" />

        <label htmlFor="destination">Destination:</label>
        <input type="text" id="destination" name="destination" />

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default JourneyFormPage;
