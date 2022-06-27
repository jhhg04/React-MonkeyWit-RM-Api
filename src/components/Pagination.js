const Pagination = ({ onBack, onNext }) => {
  const handleBack = () => {
    onBack();
  };
  const handleNext = () => {
    onNext();
  };
  return (
    <nav>
      <ul className='pagination justify-content-center'>
        <li className='page-item'>
          <button className='page-link' onClick={handleBack}>
            Back
          </button>
        </li>
        <li>
          <button className='page-link' onClick={handleNext}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
