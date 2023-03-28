import { Component } from 'react';

interface Props {
  data: FormData;
}

interface State {
  textInputValue: string;
  dateInputValue: string;
  colorSelectionValue: string;
  checkbox1Checked: boolean;
  checkbox2Checked: boolean;
  switcherValue: string;
  imageSrc: string;
}

class NewCard extends Component<Props, State> {
  state: State = {
    textInputValue: '',
    dateInputValue: '',
    colorSelectionValue: '',
    checkbox1Checked: false,
    checkbox2Checked: false,
    switcherValue: '',
    imageSrc: '',
  };

  componentDidMount() {
    const { data } = this.props;
    const textInputValue = data.get('textinput') as string;
    const dateInputValue = data.get('date-input') as string;
    const colorSelectionValue = data.get('color-selection') as string;
    const checkbox1Checked = Boolean(data.get('checkbox-1'));
    const checkbox2Checked = Boolean(data.get('checkbox-2'));
    const switcherValue = data.get('switcher') as string;
    const imageFile = data.get('image-input') as File;

    if (textInputValue) {
      this.setState({ textInputValue });
    }
    if (dateInputValue) {
      this.setState({ dateInputValue });
    }
    if (colorSelectionValue) {
      this.setState({ colorSelectionValue });
    }
    if (checkbox1Checked) {
      this.setState({ checkbox1Checked });
    }
    if (checkbox2Checked) {
      this.setState({ checkbox2Checked });
    }
    if (switcherValue) {
      this.setState({ switcherValue });
    }
    if (imageFile) {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          this.setState({ imageSrc: reader.result });
        }
      };
    }
  }

  render() {
    const {
      textInputValue,
      dateInputValue,
      colorSelectionValue,
      checkbox1Checked,
      checkbox2Checked,
      switcherValue,
      imageSrc,
    } = this.state;

    return (
      <div className="new-card">
        <div>
          <strong>Название: </strong> {textInputValue}
        </div>
        <div>
          <strong>Дата выпуска: </strong> {dateInputValue}
        </div>
        <div>
          <strong>Цвет: </strong> {colorSelectionValue}
        </div>
        <div>
          <strong>Камера: </strong>
          {checkbox1Checked ? (checkbox2Checked ? 'Задняя/Передняя' : 'Передняя') : 'Задняя'}
        </div>

        <div>
          <strong>Участие в ДТП: </strong> {switcherValue}
        </div>
        {imageSrc && (
          <div>
            <img src={imageSrc} className="card-img" alt="Uploaded file" />
          </div>
        )}
      </div>
    );
  }
}

export default NewCard;
