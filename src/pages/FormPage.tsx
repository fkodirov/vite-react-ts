import React, { useState } from 'react';
import UncontrolledComponent from '../components/Form';
import NewCard from '../components/NewCard';

const FormsPage: React.FC = () => {
  const [cardData, setCardData] = useState<FormData[]>([]);

  const handleSubmit = (formData: FormData): void => {
    setCardData((prevData) => [...prevData, formData]);
  };

  return (
    <div>
      <UncontrolledComponent onSubmit={handleSubmit} />
      <div className="new-cards">
        {cardData.map((data, index) => (
          <NewCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export { FormsPage };
