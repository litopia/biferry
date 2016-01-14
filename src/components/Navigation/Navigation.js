/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import s from './Navigation.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import FontAwesome from '../FontAwesome';

@withStyles(s)
class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={cx(s.root, this.props.className)} role="navigation">
        <Link className={s.link} to="/"><FontAwesome name="ship" fixedWidth /> Next Boat</Link>
        <Link className={s.link} to="/contact"><FontAwesome name="calendar" fixedWidth /> Schedule</Link>
        <Link className={s.link} to="/login"><FontAwesome name="exclamation-circle" fixedWidth /> Alert</Link>
        <Link className={cx(s.link)} to="/about">About</Link>
      </div>
    );
  }

}

export default Navigation;
