/**
 * FontAwesome Component
 *
 */
import React, { Component, PropTypes } from 'react';

class FontAwesome extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    border: PropTypes.bool,
    fixedWidth: PropTypes.bool,
    flip: PropTypes.oneOf(['horizontal', 'vertical']),
    spin: PropTypes.bool,
    size: PropTypes.oneOf(['2x', '3x', '4x', '5x']),
    pulse: PropTypes.bool,
    rotate: PropTypes.oneOf([90, 180, 270]),
    stack: PropTypes.oneOf(['1x', '2x']),
    inverse: PropTypes.bool,
    pull: PropTypes.oneOf(['left', 'right']),
  };

  render() {
    let className = 'fa fa-' + this.props.name;

    if (this.props.spin) {
      className += ' fa-spin';
    }

    if (this.props.pulse) {
      className += ' fa-pulse';
    }

    if (this.props.size) {
      className += ' fa-' + this.props.size;
    }

    if (this.props.stack) {
      className += ' fa-stack-' + this.props.stack;
    }

    if (this.props.rotate) {
      className += ' fa-rotate-' + this.props.rotate;
    }

    if (this.props.fixedWidth) {
      className += ' fa-fw';
    }

    if (this.props.flip) {
      className += ' fa-flip-' + this.props.flip;
    }

    if (this.props.inverse) {
      className += ' fa-inverse';
    }

    if (this.props.border) {
      className += ' fa-border';
    }

    if (this.props.pull) {
      className += ' fa-pull-' + this.props.pull;
    }

    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    return (
      <span {...this.props} className={className} />
    );
  }
}

export default FontAwesome;
