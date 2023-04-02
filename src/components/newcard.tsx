import { useEffect, useState } from 'react';

interface Props {
  data: Map<string, unknown>;
}

function NewCard({ data }: Props) {
  const [textInputValue, setTextInputValue] = useState('');
  const [dateInputValue, setDateInputValue] = useState('');
  const [colorSelectionValue, setColorSelectionValue] = useState('');
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);
  const [switcherValue, setSwitcherValue] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const textInputValue = data.get('textinput') as string;
    const dateInputValue = data.get('date-input') as string;
    const colorSelectionValue = data.get('color-selection') as string;
    const checkbox1Checked = Boolean(data.get('checkbox-1'));
    const checkbox2Checked = Boolean(data.get('checkbox-2'));
    const switcherValue = data.get('switcher') as string;
    const imageFile = data.get('image-input') as File;

    if (textInputValue) {
      setTextInputValue(textInputValue);
    }
    if (dateInputValue) {
      setDateInputValue(dateInputValue);
    }
    if (colorSelectionValue) {
      setColorSelectionValue(colorSelectionValue);
    }
    if (checkbox1Checked) {
      setCheckbox1Checked(checkbox1Checked);
    }
    if (checkbox2Checked) {
      setCheckbox2Checked(checkbox2Checked);
    }
    if (switcherValue) {
      setSwitcherValue(switcherValue);
    }
    if (imageFile) {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setImageSrc(reader.result);
        }
      };
    }
  }, [data]);

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

export default NewCard;
