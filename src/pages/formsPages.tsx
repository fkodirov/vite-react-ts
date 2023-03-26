import React, { Component } from 'react';
import UncontrolledComponent from '../components/form';
import NewCard from '../components/newcard';

class FormsPage extends Component {
  state = {
    cardData: [],
    showHeader: false,
  };

  handleSubmit = (formData: FormData): void => {
    const { cardData } = this.state;
    console.log(cardData);
    this.setState({
      cardData: [...cardData, formData],
      showHeader: true,
    });
  };

  render() {
    const { cardData } = this.state;
    return (
      <div>
        <UncontrolledComponent onSubmit={this.handleSubmit} />
        <div className="myClass">
          {cardData.map((data, index) => (
            <NewCard key={index} data={data} />
          ))}
        </div>
      </div>
    );
  }
}

export { FormsPage };
