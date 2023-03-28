import React, { ChangeEvent } from 'react';
interface Props {
  onSubmit: (formData: FormData) => void;
}

interface State {
  inputFilled: boolean;
  dateInputFilled: boolean;
  selectFilled: boolean;
  checkbox1Filled: boolean;
  checkbox2Filled: boolean;
  onRadioFilled: boolean;
  offRadioFilled: boolean;
  imageFilled: boolean;
}
let valid: number;
class UncontrolledComponent extends React.Component<Props> {
  inputRef = React.createRef<HTMLInputElement>();
  dateInputRef = React.createRef<HTMLInputElement>();
  selectRef = React.createRef<HTMLSelectElement>();
  checkbox1Ref = React.createRef<HTMLInputElement>();
  checkbox2Ref = React.createRef<HTMLInputElement>();
  onRadioRef = React.createRef<HTMLInputElement>();
  offRadioRef = React.createRef<HTMLInputElement>();
  imageRef = React.createRef<HTMLInputElement>();

  state: State = {
    inputFilled: true,
    dateInputFilled: true,
    selectFilled: true,
    checkbox1Filled: true,
    checkbox2Filled: true,
    onRadioFilled: true,
    offRadioFilled: true,
    imageFilled: true,
  };
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    valid = 0;
    const formData = new FormData(event.currentTarget);

    if (!this.inputRef.current?.value) {
      valid++;
      this.setState({ inputFilled: false });
    } else {
      this.setState({ inputFilled: true });
    }

    if (!this.dateInputRef.current?.value) {
      valid++;
      this.setState({ dateInputFilled: false });
    } else {
      this.setState({ dateInputFilled: true });
    }
    if (!this.checkbox1Ref.current?.checked && !this.checkbox2Ref.current?.checked) {
      valid++;
      this.setState({ checkbox1Filled: false });
      this.setState({ checkbox2Filled: false });
    } else {
      this.setState({ checkbox1Filled: true });
      this.setState({ checkbox2Filled: true });
    }
    if (!this.onRadioRef.current?.checked && !this.offRadioRef.current?.checked) {
      valid++;
      this.setState({ onRadioFilled: false });
      this.setState({ offRadioFilled: false });
    } else {
      this.setState({ onRadioFilled: true });
      this.setState({ offRadioFilled: true });
    }
    if (this.imageRef.current?.files) {
      if (!this.imageRef.current?.files[0]) {
        valid++;
        this.setState({ imageFilled: false });
      } else {
        this.setState({ imageFilled: true });
      }
    }

    if (valid == 0) this.props.onSubmit(formData);
    else alert('Пожалуйста, заполните поля помеченные красным.');
  };
  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputFilled = event.target.value;
    this.setState({ inputFilled });
  };
  render() {
    const {
      inputFilled,
      dateInputFilled,
      checkbox1Filled,
      checkbox2Filled,
      onRadioFilled,
      offRadioFilled,
      imageFilled,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="my-form">
        <div>
          <label htmlFor="textinput" style={{ color: inputFilled ? 'inherit' : 'red' }}>
            Название:
          </label>
          <input type="text" ref={this.inputRef} name="textinput" />
        </div>
        <div>
          <label htmlFor="date-input" style={{ color: dateInputFilled ? 'inherit' : 'red' }}>
            Дата выпуска:
          </label>
          <input type="date" ref={this.dateInputRef} name="date-input" />
        </div>
        <div>
          Цвет:
          <select ref={this.selectRef} name="color-selection">
            <option value="Красный">Красный</option>
            <option value="Зеленый">Зеленый</option>
            <option value="Синий">Синий</option>
          </select>
        </div>
        <div>
          <span style={{ color: checkbox1Filled || checkbox2Filled ? 'inherit' : 'red' }}>
            Наличие камер:
          </span>
          <label>
            <input type="checkbox" ref={this.checkbox1Ref} name="checkbox-1" />
            Передняя
          </label>
          <label>
            <input type="checkbox" ref={this.checkbox2Ref} name="checkbox-2" />
            Задняя
          </label>
        </div>
        <span style={{ color: onRadioFilled || offRadioFilled ? 'inherit' : 'red' }}>
          Участие в ДТП
        </span>
        <div className="switcher">
          <input type="radio" id="on" name="switcher" value="Да" ref={this.onRadioRef} />
          <label htmlFor="on">Да</label>
          <input type="radio" id="off" name="switcher" value="Нет" ref={this.offRadioRef} />
          <label htmlFor="off">Нет</label>
        </div>
        <div>
          <label htmlFor="image-input" style={{ color: imageFilled ? 'inherit' : 'red' }}>
            Картинка
          </label>
          <input type="file" accept="image/*" ref={this.imageRef} name="image-input" />
        </div>
        <button type="submit">Отправить</button>
      </form>
    );
  }
}

export default UncontrolledComponent;
