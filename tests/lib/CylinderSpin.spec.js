import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { CylinderSpinLoader } from '../../lib/index';

describe('CylinderSpinLoader', () => {
  describe('default', () => {
    const wrapper = mount(<CylinderSpinLoader />);
    const props = wrapper.props();

    it('should render', () => {
      expect(wrapper.find(CylinderSpinLoader)).to.exist;
    });

    it('should render with default color (#000)', () => {
      expect(props.color).to.be.equal('#000');
    });

    it('should render with default duration (1.1)', () => {
      expect(props.duration).to.be.equal(1.1);
    });

    it('should render with default size (25)', () => {
      expect(props.size).to.be.equal(25);
    });
  });

  describe('custom', () => {
    const wrapper = mount(
      <CylinderSpinLoader
        color="#AAA"
        duration={5}
        size={20}
      />,
    );
    const props = wrapper.props();

    it('should render', () => {
      expect(wrapper.find(CylinderSpinLoader)).to.exist;
    });

    it('should render with color equal #AAA', () => {
      expect(props.color).to.be.equal('#AAA');
    });

    it('should render with duration equal 5', () => {
      expect(props.duration).to.be.equal(5);
    });

    it('should render with size equal 20', () => {
      expect(props.size).to.be.equal(20);
    });
  });
});
