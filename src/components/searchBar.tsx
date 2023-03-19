import React from 'react';

interface Props {
  onSearch: (query: string) => void;
}

interface State {
  query: string;
}

class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      query: localStorage.getItem('searchQuery') || '',
    };
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.saveToLocalStorage);
  }

  componentWillUnmount() {
    localStorage.setItem('searchQuery', this.state.query);
  }

  saveToLocalStorage = () => {
    localStorage.setItem('searchQuery', this.state.query);
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSearch(this.state.query);
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="search-bar"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <button type="submit">Поиск</button>
      </form>
    );
  }
}

export default SearchBar;
