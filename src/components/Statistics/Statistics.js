import PropTypes from "prop-types";
import s from "./Statistics.module.scss";
export default function Statistics({
  options,
  total = 0,
  positivePercentage = 0,
}) {
  return (
    <div>
      {renderStatistics(options)}
      <p className={s.points}>Total: {total}</p>
      {/* countPositiveFeedbackPercentage */}
      <p className={s.points}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

const renderStatistics = function (options) {
  /* Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта */
  /* options - чьи собственные перечисляемые свойства будут возвращены */
  return Object.keys(options).map((key) => (
    <p className={s.point} key={key}>
      {key}: {options[key]}
    </p>
  ));
};
Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
