import React, { Component } from "react";

import Section from "./components/Section";

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };
  countTotalFeedback() {}
  countPositiveFeedbackPercentage() {}
  render() {
    return (
      <>
        <Section title="Please leave feedback"></Section>
        <Section title="Statistics"></Section>
      </>
    );
  }
}
export default App;
