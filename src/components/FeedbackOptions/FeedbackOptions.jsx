import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.button_wrapper}>
      {options.map((buttonName, index) => (
        <button
          type="button"
          key={index}
          className={css.button}
          onClick={() => onLeaveFeedback(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
