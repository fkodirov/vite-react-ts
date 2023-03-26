import React from 'react';

interface Props {
  onSubmit: (formData: FormData) => void;
}

class UncontrolledComponent extends React.Component<Props> {
  inputRef = React.createRef<HTMLInputElement>();
  dateInputRef = React.createRef<HTMLInputElement>();
  selectRef = React.createRef<HTMLSelectElement>();
  checkbox1Ref = React.createRef<HTMLInputElement>();
  checkbox2Ref = React.createRef<HTMLInputElement>();
  onRadioRef = React.createRef<HTMLInputElement>();
  offRadioRef = React.createRef<HTMLInputElement>();
  imageRef = React.createRef<HTMLInputElement>();

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(this.inputRef.current?.value);
    console.log(this.dateInputRef.current?.value);
    console.log(this.selectRef.current?.value);
    console.log(this.checkbox1Ref.current?.value);
    console.log(this.checkbox2Ref.current?.value);
    console.log(this.onRadioRef.current?.value);
    console.log(this.offRadioRef.current?.value);

    if (this.imageRef.current?.files) console.log(this.imageRef.current?.files[0]);
    this.props.onSubmit({
      input: this.inputRef.current?.value,
      date: this.dateInputRef.current?.value,
      select: this.selectRef.current?.value,
      checkbox1: this.checkbox1Ref.current?.checked,
      checkbox2: this.checkbox2Ref.current?.checked,
      switcher: this.onRadioRef.current?.checked ? 'on' : 'off',
      image: this.imageRef.current?.files?.[0],
    });
  };

  render() {
    // const { label } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="text-input">123</label>
          <input type="text" ref={this.inputRef} name="text-input" />
        </div>
        <div>
          <label htmlFor="date-input">Date</label>
          <input type="date" ref={this.dateInputRef} name="date-input" />
        </div>
        <div>
          <select ref={this.selectRef} name="color-selection">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" ref={this.checkbox1Ref} name="checkbox-1" />
            Checkbox 1
          </label>
          <label>
            <input type="checkbox" ref={this.checkbox2Ref} name="checkbox-2" />
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
          <input type="file" accept="image/*" ref={this.imageRef} name="image-input" />
        </div>
        <button type="submit">Отправить</button>
      </form>
    );
  }
}

export default UncontrolledComponent;
