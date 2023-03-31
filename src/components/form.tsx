import React, { Component, createRef } from 'react';
import { StateForm } from '../types/types';

interface Props {
  onSubmit: (formData: FormData) => void;
}
let valid: number;
class UncontrolledComponent extends Component<Props> {
  inputRef = createRef<HTMLInputElement>();
  dateInputRef = createRef<HTMLInputElement>();
  selectRef = createRef<HTMLSelectElement>();
  checkbox1Ref = createRef<HTMLInputElement>();
  checkbox2Ref = createRef<HTMLInputElement>();
  onRadioRef = createRef<HTMLInputElement>();
  offRadioRef = createRef<HTMLInputElement>();
  imageRef = createRef<HTMLInputElement>();

  state: StateForm = {
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

    if (valid == 0) {
      this.props.onSubmit(formData);
      event.currentTarget.reset();
      this.setState({
        inputFilled: true,
        dateInputFilled: true,
        selectFilled: true,
        checkbox1Filled: true,
        checkbox2Filled: true,
        onRadioFilled: true,
        offRadioFilled: true,
        imageFilled: true,
      });
    } else alert('Пожалуйста, заполните поля помеченные красным.');
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
          <input type="text" ref={this.inputRef} id="textinput" name="textinput" />
        </div>
        <div>
          <label htmlFor="date-input" style={{ color: dateInputFilled ? 'inherit' : 'red' }}>
            Дата выпуска:
          </label>
          <input type="date" ref={this.dateInputRef} id="date-input" name="date-input" />
        </div>
        <div>
          <label htmlFor="color-selection">Цвет:</label>
          <select ref={this.selectRef} id="color-selection" name="color-selection">
            <option value="Красный">Красный</option>
            <option value="Зеленый">Зеленый</option>
            <option value="Синий">Синий</option>
          </select>
        </div>
        <div>
          <span style={{ color: checkbox1Filled || checkbox2Filled ? 'inherit' : 'red' }}>
            Наличие камер:
          </span>
          <label htmlFor="checkbox-1">
            <input type="checkbox" ref={this.checkbox1Ref} id="checkbox-1" name="checkbox-1" />
            Передняя
          </label>
          <label htmlFor="checkbox-2">
            <input type="checkbox" ref={this.checkbox2Ref} id="checkbox-2" name="checkbox-2" />
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
          <input
            type="file"
            accept="image/*"
            ref={this.imageRef}
            id="image-input"
            name="image-input"
          />
        </div>
        <button type="submit">Отправить</button>
      </form>
    );
  }
}

export default UncontrolledComponent;
