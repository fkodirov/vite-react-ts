import React from 'react';

interface NewCardProps {
  data: {
    input: string;
    date: string;
    select: string;
    checkbox1: boolean | undefined;
    checkbox2: boolean | undefined;
    radio: string;
    image: File | null;
  };
}

const NewCard: React.FC<NewCardProps> = ({ data }) => {
  const { input, date, select, checkbox1, checkbox2, radio, image } = data;

  return (
    <div>
      <div>{input}</div>
      <div>{date}</div>
      <div>{select}</div>
      <div>{checkbox1 ? checkbox1.toString() : ''}</div>
      <div>{checkbox2 ? checkbox2.toString() : ''}</div>
      <div>{radio}</div>
      {image && <img src={URL.createObjectURL(image)} alt="uploaded" />}
    </div>
  );
};

export default NewCard;
