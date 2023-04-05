import { Component } from 'react';
import UncontrolledComponent from '../components/Form';
import NewCard from '../components/NewCard';

class FormsPage extends Component {
  state = {
    cardData: [],
    showHeader: false,
  };

  handleSubmit = (formData: FormData): void => {
    const { cardData } = this.state;
    this.setState({
      cardData: [...cardData, formData],
      showHeader: true,
    });
    console.log(cardData);
  };

  render() {
    const { cardData } = this.state;
    return (
      <div>
        <UncontrolledComponent onSubmit={this.handleSubmit} />
        <div className="new-cards">
          {cardData.map((data, index) => (
            <NewCard key={index} data={data} />
          ))}
        </div>
      </div>
    );
  }
}

export { FormsPage };
