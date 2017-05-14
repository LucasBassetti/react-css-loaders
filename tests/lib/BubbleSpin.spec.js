import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { BubbleSpinLoader } from '../../lib/index';

describe('BubbleSpinLoader', () => {
  describe('default', () => {
    const wrapper = mount(<BubbleSpinLoader />);
    const props = wrapper.props();

    it('should render', () => {
      expect(wrapper.find(BubbleSpinLoader)).to.exist;
    });

    it('should render with default color (#000)', () => {
      expect(props.color).to.be.equal('#000');
    });

    it('should render with default duration (1.3)', () => {
      expect(props.duration).to.be.equal(1.3);
    });

    it('should render with default size (20)', () => {
      expect(props.size).to.be.equal(20);
    });
  });

  describe('custom', () => {
    const wrapper = mount(
      <BubbleSpinLoader
        color="#AAA"
        duration={5}
        size={30}
      />,
    );
    const props = wrapper.props();

    it('should render', () => {
      expect(wrapper.find(BubbleSpinLoader)).to.exist;
    });

    it('should render with color equal #AAA', () => {
      expect(props.color).to.be.equal('#AAA');
    });

    it('should render with duration equal 5', () => {
      expect(props.duration).to.be.equal(5);
    });

    it('should render with size equal 30', () => {
      expect(props.size).to.be.equal(30);
    });
  });
});
