import { useDispatch, useSelector } from 'react-redux';
import UncontrolledComponent from '../components/Form';
import NewCard from '../components/NewCard';
import { addCardData, selectCardData } from '../store/features/formsSlice';

const FormsPage = () => {
  const dispatch = useDispatch();
  const cardData = useSelector(selectCardData);

  const handleSubmit = (formData: FormData): void => {
    dispatch(addCardData(formData));
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
