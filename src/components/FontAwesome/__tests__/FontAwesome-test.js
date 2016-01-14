import React from 'react';
import ReactDom from 'react-dom';
import TestUtil from 'react-addons-test-utils';
import FontAwesome from '../FontAwesome';

describe('FontAwesome', () => {
  let classes;

  beforeEach(() => {
    const props = {
      border: true,
      className: 'custom-class',
      fixedWidth: true,
      flip: 'vertical',
      inverse: true,
      name: 'rocket',
      size: '2x',
      spin: true,
      pulse: true,
      rotate: 180,
      stack: '1x'
    };

    const component = TestUtil.renderIntoDocument(<FontAwesome {...props} />);
    classes = ReactDom.findDOMNode(component).className.split(' ');
    console.log(classes);
  });

  it('the proper class name get set', () => {
    
    const expectedClasses = [
      'fa',
      'fa-border',
      'fa-flip-vertical',
      'fa-fw',
      'fa-inverse',
      'fa-2x',
      'fa-rocket',
      'fa-spin',
      'fa-pulse',
      'fa-rotate-180',
      'fa-stack-1x',
      'custom-class'
    ];

    expectedClasses.forEach(classname => {
      expect(classes.indexOf(classname)).toBeGreaterThan(-1);
    });

  });
});
