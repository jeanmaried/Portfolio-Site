import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

const LeftArrow = (props) => {
  return (
    <div onClick={props.nextSlide} className="backArrow">
      <FontAwesome name="arrow-left" size="2x"/>
    </div>
  );
}

export default LeftArrow;