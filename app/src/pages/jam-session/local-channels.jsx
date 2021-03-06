import React from 'react';
import { Button, ButtonGroup, Alert } from 'react-bootstrap';
import VolumeIndicator from './volume-indicator.jsx';
import UserPanel from './user-panel.jsx';

class LocalChannels extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
    };

    // Private members
    // TODO

    // Prebind custom methods
    // TODO
  }

  componentDidMount() {
  }

  render() {
    let username = this.context.ninjam.username || 'You';
    let placeholder = this.context.ninjam.localChannels.length ? '' : (
      <Alert bsStyle="warning">No recording devices were detected! 🙁</Alert>
    );
    return (
      <UserPanel name={username} ip="(You)" local>
        {this.context.ninjam.localChannels.map((lc, i) => {
          return <ButtonGroup key={i}>
            <Button onClick={() => {lc.toggleTransmit(); this.forceUpdate();}} bsStyle={lc.transmit ? "primary" : "default"}>Transmit</Button>
            <Button onClick={() => {lc.toggleLocalMute(); this.forceUpdate();}} bsStyle={lc.localMute ? "default" : "primary"}>Listen</Button>
            <Button disabled><VolumeIndicator channel={lc} /></Button>
            <Button disabled>{lc.name}</Button>
          </ButtonGroup>;
        })}
        {placeholder}
      </UserPanel>
    );
  }
}
// Context gained from parent
LocalChannels.contextTypes = {
  router: React.PropTypes.object,
  ninjam: React.PropTypes.object,
};
export default LocalChannels;
