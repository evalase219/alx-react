import React from 'react';
import PropTypes from 'prop-types';

export default function CourseListRow({
  isHeader,
  textFirstCell,
  textSecondCell
}) {
  const rowColor = { background: '#f5f5f5ab' };
  const headerColor = { background: '#deb5b545' };
  let elem = undefined;
  let backColor = undefined;

  if (isHeader === true) {
    if (textSecondCell === null) {
      elem = (
        <>
          <th colSpan='2'>{textFirstCell}</th>
        </>
      );
    } else {
      elem = (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      );
    }
  } else {
    elem = (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
    );
  }

  (isHeader) 
  ? backColor = headerColor
  : backColor = rowColor;

  return <tr style={backColor}>{elem}</tr>;
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};