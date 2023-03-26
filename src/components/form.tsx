import React from 'react';

interface Props {
  onSubmit: (formData: FormData) => void;
}

class UncontrolledComponent extends React.Component<Props> {
  inputRef = React.createRef<HTMLInputElement>();
  selectRef = React.createRef<HTMLSelectElement>();
  checkbox1Ref = React.createRef<HTMLInputElement>();
  checkbox2Ref = React.createRef<HTMLInputElement>();
  onRadioRef = React.createRef<HTMLInputElement>();
  offRadioRef = React.createRef<HTMLInputElement>();
  imageRef = React.createRef<HTMLInputElement>();

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(this.inputRef.current?.value);
    if (this.imageRef.current?.files) console.log(this.imageRef.current?.files[0]);
    this.props.onSubmit(new FormData(event.currentTarget));
  };

  render() {
    // const { label } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>123</label>
          <input type="text" ref={this.inputRef} />
        </div>
        <div>
          <label htmlFor="date-input">Date</label>
          <input type="date" ref={this.inputRef} />
        </div>
        <div>
          <select ref={this.selectRef}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" ref={this.checkbox1Ref} />
            Checkbox 1
          </label>
          <label>
            <input type="checkbox" ref={this.checkbox2Ref} />
            Checkbox 2
          </label>
        </div>
        <div className="switcher">
          <input type="radio" id="on" name="switcher" value="on" ref={this.onRadioRef} />
          <label htmlFor="on">On</label>
          <input type="radio" id="off" name="switcher" value="off" ref={this.offRadioRef} />
          <label htmlFor="off">Off</label>
        </div>
        <div>
          <label htmlFor="image-input">Image</label>
          <input type="file" accept="image/*" ref={this.imageRef} />
        </div>
        <button type="submit">Отправить</button>
      </form>
    );
  }
}

export default UncontrolledComponent;
