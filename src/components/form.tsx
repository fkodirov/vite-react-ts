import React, { useState, useRef } from 'react';

interface Props {
  onSubmit: (formData: FormData) => void;
}

const UncontrolledComponent = ({ onSubmit }: Props) => {
  const [inputFilled, setInputFilled] = useState(true);
  const [dateInputFilled, setDateInputFilled] = useState(true);
  const [checkbox1Filled, setCheckbox1Filled] = useState(true);
  const [checkbox2Filled, setCheckbox2Filled] = useState(true);
  const [onRadioFilled, setOnRadioFilled] = useState(true);
  const [offRadioFilled, setOffRadioFilled] = useState(true);
  const [imageFilled, setImageFilled] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const checkbox1Ref = useRef<HTMLInputElement>(null);
  const checkbox2Ref = useRef<HTMLInputElement>(null);
  const onRadioRef = useRef<HTMLInputElement>(null);
  const offRadioRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let valid = 0;
    const formData = new FormData(event.currentTarget);

    if (!inputRef.current?.value) {
      valid++;
      setInputFilled(false);
    } else {
      setInputFilled(true);
    }

    if (!dateInputRef.current?.value) {
      valid++;
      setDateInputFilled(false);
    } else {
      setDateInputFilled(true);
    }

    if (!checkbox1Ref.current?.checked && !checkbox2Ref.current?.checked) {
      valid++;
      setCheckbox1Filled(false);
      setCheckbox2Filled(false);
    } else {
      setCheckbox1Filled(true);
      setCheckbox2Filled(true);
    }

    if (!onRadioRef.current?.checked && !offRadioRef.current?.checked) {
      valid++;
      setOnRadioFilled(false);
      setOffRadioFilled(false);
    } else {
      setOnRadioFilled(true);
      setOffRadioFilled(true);
    }

    if (imageRef.current?.files) {
      if (!imageRef.current?.files[0]) {
        valid++;
        setImageFilled(false);
      } else {
        setImageFilled(true);
      }
    }

    if (valid === 0) {
      onSubmit(formData);
      event.currentTarget.reset();
      setInputFilled(true);
      setDateInputFilled(true);
      setCheckbox1Filled(true);
      setCheckbox2Filled(true);
      setOnRadioFilled(true);
      setOffRadioFilled(true);
      setImageFilled(true);
    } else {
      alert('Please fill in the fields marked in red.');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="my-form">
      <div>
        <label htmlFor="textinput" style={{ color: inputFilled ? 'inherit' : 'red' }}>
          Название:
        </label>
        <input type="text" ref={inputRef} id="textinput" name="textinput" />
      </div>
      <div>
        <label htmlFor="date-input" style={{ color: dateInputFilled ? 'inherit' : 'red' }}>
          Дата выпуска:
        </label>
        <input type="date" ref={dateInputRef} id="date-input" name="date-input" />
      </div>
      <div>
        <label htmlFor="color-selection">Цвет:</label>
        <select ref={selectRef} id="color-selection" name="color-selection">
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
          <input type="checkbox" ref={checkbox1Ref} id="checkbox-1" name="checkbox-1" />
          Передняя
        </label>
        <label htmlFor="checkbox-2">
          <input type="checkbox" ref={checkbox2Ref} id="checkbox-2" name="checkbox-2" />
          Задняя
        </label>
      </div>
      <span style={{ color: onRadioFilled || offRadioFilled ? 'inherit' : 'red' }}>
        Участие в ДТП
      </span>
      <div className="switcher">
        <input type="radio" id="on" name="switcher" value="Да" ref={onRadioRef} />
        <label htmlFor="on">Да</label>
        <input type="radio" id="off" name="switcher" value="Нет" ref={offRadioRef} />
        <label htmlFor="off">Нет</label>
      </div>
      <div>
        <label htmlFor="image-input" style={{ color: imageFilled ? 'inherit' : 'red' }}>
          Картинка
        </label>
        <input type="file" accept="image/*" ref={imageRef} id="image-input" name="image-input" />
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default UncontrolledComponent;
