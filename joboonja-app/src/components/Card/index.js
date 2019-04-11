/* eslint-disable react/forbid-prop-types,jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Card({
  children, style, hoverable, onClick, className,
}) {
  let cardClass;
  if (hoverable && onClick) {
    cardClass = 'cardContainer cardContainerHoverable cardContainerClickable';
  } else {
    cardClass = hoverable ? 'cardContainer cardContainerHoverable' : 'cardContainer';
  }
  cardClass += ` ${className}`;
  return (
    <div className={cardClass} style={style} onClick={onClick}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  hoverable: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
Card.defaultProps = {
  children: '',
  style: {},
  hoverable: false,
  onClick: null,
  className: '',
};

export default Card;
