import React from 'react';
import PropTypes from 'prop-types';
import './index.css'

export default function CardInfo({ icon, title, Component, close }) {
  return (
    <div id="card-info">
        {/* Card Info Title */}
        <div className='card-info-title d-flex'>
            <div className='title-section'>
                <img src="/logo192.png" />
                <h6>Notification</h6>
            </div>
            <div className='close-section'>
                Close
            </div>
        </div>
        {/* Card Info Title */}
        <div className='card-info-body'>
            {Component && <Component />}
        </div>
    </div>
  );
}

CardInfo.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

CardInfo.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};