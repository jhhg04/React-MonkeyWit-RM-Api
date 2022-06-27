const Pagination = ({ prev, next, onBack, onNext }) => {
  const handleBack = () => {
    onBack();
  };
  const handleNext = () => {
    onNext();
  };
  return (
    <nav>
      <ul className='pagination justify-content-center'>
        {prev ? (
          <li className='page-item'>
            <button className='page-link' onClick={handleBack}>
              Back
            </button>
          </li>
        ) : null}
        {next ? (
          <li>
            <button className='page-link' onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
