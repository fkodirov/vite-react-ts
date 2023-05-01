import React from 'react';
import { useForm } from 'react-hook-form';

interface Props {
  onSubmit: (formData: FormData) => void;
}

type FormValues = {
  textinput: string;
  'date-input': string;
  'color-selection': string;
  'checkbox-1': boolean;
  'checkbox-2': boolean;
  switcher: string;
  'image-input': FileList | null;
};

const UncontrolledComponent = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      textinput: '',
      'date-input': '',
      'color-selection': 'Красный',
      'checkbox-1': false,
      'checkbox-2': false,
      switcher: 'Нет',
      'image-input': null,
    },
  });

  const onSubmitHandler = (data: FormValues) => {
    const formData = new FormData();
    formData.append('textinput', data.textinput);
    formData.append('date-input', data['date-input']);
    formData.append('color-selection', data['color-selection']);
    formData.append('checkbox-1', data['checkbox-1'].toString());
    formData.append('checkbox-2', data['checkbox-2'].toString());
    formData.append('switcher', data.switcher);
    if (data['image-input'] && data['image-input'][0]) {
      formData.append('image-input', data['image-input'][0]);
    }
    onSubmit(formData);
    reset({
      textinput: '',
      'date-input': '',
      'color-selection': 'Красный',
      'checkbox-1': false,
      'checkbox-2': false,
      switcher: 'Нет',
      'image-input': null,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="my-form" data-testid="my-form">
      <div>
        <label htmlFor="textinput" style={{ color: errors.textinput ? 'red' : 'inherit' }}>
          Название:
        </label>
        <input type="text" id="textinput" {...register('textinput', { required: true })} />
        {errors.textinput && <span>Пожалуйста, заполните поле</span>}
      </div>
      <div>
        <label htmlFor="date-input" style={{ color: errors['date-input'] ? 'red' : 'inherit' }}>
          Дата выпуска:
        </label>
        <input type="date" id="date-input" {...register('date-input', { required: true })} />
        {errors['date-input'] && <span>Пожалуйста, заполните поле</span>}
      </div>
      <div>
        <label htmlFor="color-selection">Цвет:</label>
        <select id="color-selection" {...register('color-selection')}>
          <option value="Красный">Красный</option>
          <option value="Зеленый">Зеленый</option>
          <option value="Синий">Синий</option>
        </select>
      </div>
      <div>
        <span style={{ color: errors['checkbox-1'] || errors['checkbox-2'] ? 'red' : 'inherit' }}>
          Наличие камер:
        </span>
        <label htmlFor="checkbox-1">
          <input type="checkbox" id="checkbox-1" {...register('checkbox-1')} />
          Передняя
        </label>
        <label htmlFor="checkbox-2">
          <input type="checkbox" id="checkbox-2" {...register('checkbox-2')} />
          Задняя
        </label>
        {errors['checkbox-1'] && <span>Пожалуйста, выберите хотя бы один вариант</span>}
        {errors['checkbox-2'] && <span>Пожалуйста, выберите хотя бы один вариант</span>}
      </div>
      <div>
        <span>Наличие ДТП:</span>
        <label htmlFor="switcher">
          <input type="radio" id="switcher" value="Да" {...register('switcher')} />
          Да
        </label>
        <label htmlFor="switcher-no">
          <input type="radio" id="switcher-no" value="Нет" {...register('switcher')} />
          Нет
        </label>
      </div>
      <div>
        <label htmlFor="image-input" style={{ color: errors.textinput ? 'red' : 'inherit' }}>
          Картинка
        </label>
        <input type="file" id="image-input" {...register('image-input', { required: true })} />
        {errors['image-input'] && <span>Пожалуйста, добавьте изображение</span>}
      </div>
      <button type="submit">Добавить</button>
    </form>
  );
};

export default UncontrolledComponent;
