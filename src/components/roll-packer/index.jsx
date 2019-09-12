import React from 'react';
import PropTypes from 'prop-types';
import RollPackerItem from './RollPackerItem';

import './index.scss';

export default class RollPacker extends React.Component {
  static Item = RollPackerItem;

  static propTypes = {
    interval: PropTypes.number,
    height: PropTypes.number,
  };

  static defaultProps = {
    interval: 30,
    height: 250,
  };

  ulRef = null;

  timer = null;

  height = 0;

  state = {
    top: 0,
    secondListVisible: false,
  }

  setInterval() {
    this.timer = setInterval(() => {
      this.setState(({top}) => {
        const nextTop = Math.abs(top) >= this.height ? 0 : --top;
        return {
          top: nextTop,
        };
      });
    }, this.props.interval);
  }

  clearInterval() {
    clearInterval(this.timer);
  }

  handleMouserOver = () => {
    this.clearInterval();
  }

  handleMouserOut = () => {
    this.setInterval();
  }

  componentDidMount() {
    if (!this.ulRef) {
      return;
    }
    this.height = this.ulRef.clientHeight;
    this.setState({
      secondListVisible: true,
    });
    this.setInterval();
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  render() {
    const {height} = this.props;
    const {top, secondListVisible} = this.state;
    const children = [];
    React.Children.forEach(this.props.children, child => {
      if (child.type !== RollPackerItem) {
        return;
      }
      children.push(child);
    });
    return (
      <div className="roll-packer" style={{height}}>
        <ul
          className="roll-packer-list"
          ref={ref => (this.ulRef = ref)}
          style={{top: top}}
          onMouseOver={this.handleMouserOver}
          onMouseOut={this.handleMouserOut}
        >
          {children}
          {secondListVisible ? children : null}
        </ul>
      </div>
    );
  }
}
