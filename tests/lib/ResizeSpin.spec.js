import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { ResizeSpinLoader } from '../../lib/index';

describe('ResizeSpinLoader', () => {
  describe('default', () => {
    const wrapper = mount(<ResizeSpinLoader />);
    const props = wrapper.props();

    it('should render', () => {
      expect(wrapper.find(ResizeSpinLoader)).to.exist;
    });

    it('should render with default background (#fff)', () => {
      expect(props.background).to.be.equal('#fff');
    });

    it('should render with default color (#000)', () => {
      expect(props.color).to.be.equal('#000');
    });

    it('should render with default duration (2)', () => {
      expect(props.duration).to.be.equal(2);
    });

    it('should render with default size (11)', () => {
      expect(props.size).to.be.equal(11);
    });
  });

  describe('custom', () => {
    const wrapper = mount(
      <ResizeSpinLoader
        background="#000"
        color="#AAA"
        duration={5}
        size={20}
      />,
    );
    const props = wrapper.props();

    it('should render', () => {
      expect(wrapper.find(ResizeSpinLoader)).to.exist;
    });

    it('should render with background equal #000', () => {
      expect(props.background).to.be.equal('#000');
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
