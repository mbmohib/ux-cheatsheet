import React from 'react';

function withSVG(WrappedComponent, config = {}) {
  return class extends React.Component {
    render() {
      const {
        style = config.style || {},
        fill = config.fill || '',
        width = config.size || '24',
        height = config.size || '24',
        className = config.className || '',
        viewBox = config.viewBox || '0 0 24 24',
      } = this.props;

      return (
        <svg
          width={width}
          height={height}
          style={style}
          viewBox={viewBox}
          fill={fill}
          className={`svg-icon ${className || ''}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <WrappedComponent />
        </svg>
      );
    }
  };
}

export default withSVG;
