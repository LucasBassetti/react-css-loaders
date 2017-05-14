import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { SpinLoader } from '../../lib/index';

describe('SpinLoader', () => {
  describe('default', () => {
    const wrapper = mount(<SpinLoader />);
    const props = wrapper.props();

    it('should render', () => {
      expect(wrapper.find(SpinLoader)).to.exist;
    });

    it('should render with default background (#fff)', () => {
      expect(props.background).to.be.equal('#fff');
    });

    it('should render with default color (#000)', () => {
      expect(props.color).to.be.equal('#000');
    });

    it('should render with default duration (1.4)', () => {
      expect(props.duration).to.be.equal(1.4);
    });

    it('should render with default size (10)', () => {
      expect(props.size).to.be.equal(10);
    });
  });

  describe('custom', () => {
    const wrapper = mount(
      <SpinLoader
        background="#000"
        color="#AAA"
        duration={5}
        size={20}
      />,
    );
    const props = wrapper.props();

    it('should render', () => {
      expect(wrapper.find(SpinLoader)).to.exist;
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
