import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

const RightArrow = (props) => {
  return (
    <div onClick={props.nextSlide} className="nextArrow">
      <FontAwesome name="arrow-right" size="2x"/>
    </div>
  );
}

export default RightArrow;