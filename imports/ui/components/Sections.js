import React, { Component } from 'react';

// components
import AddSection from './AddSection';

class Sections extends Component {
  render() {
    return (
      <div>
        <h1>Sections</h1>
        <p>SectionList Component</p>
        <AddSection />
      </div>
    );
  }
}

export default Sections;