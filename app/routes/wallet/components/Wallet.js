import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Peers from 'components/Peers'
import styles from './Wallet.scss'

class Wallet extends Component {
  componentWillMount() {
    const { fetchPeers, fetchChannels } = this.props

    fetchPeers()
    fetchChannels()
  }

  render() {
    const {
      ticker,
      peers: { peersLoading, peers, peer, peerForm },
      channels: { channelsLoading, channels, channel, channelForm, pendingChannels },
      fetchPeers,
      fetchChannels,
      setPeer,
      setChannel,
      peerModalOpen,
      channelModalOpen,
      setPeerForm,
      setChannelForm,
      connectRequest,
      disconnectRequest,
      openChannel,
      closeChannel,
      currentTicker,
      explorerLinkBase
    } = this.props

    return (
      <div className={styles.wallet}>
        <section className={styles.walletData}>
          <Peers
            fetchPeers={fetchPeers}
            peersLoading={peersLoading}
            peers={peers}
            modalPeer={peer}
            setPeer={setPeer}
            peerModalOpen={peerModalOpen}
            peerForm={peerForm}
            setPeerForm={setPeerForm}
            connect={connectRequest}
            disconnect={disconnectRequest}
          />
        </section>
      </div>
    )
  }
}

Wallet.propTypes = {
  fetchPeers: PropTypes.func.isRequired,
  fetchChannels: PropTypes.func.isRequired,
  ticker: PropTypes.object.isRequired,
  peers: PropTypes.object.isRequired,
  channels: PropTypes.object.isRequired,
  setPeer: PropTypes.func.isRequired,
  setChannel: PropTypes.func.isRequired,
  peerModalOpen: PropTypes.bool.isRequired,
  channelModalOpen: PropTypes.bool.isRequired,
  setPeerForm: PropTypes.func.isRequired,
  setChannelForm: PropTypes.func.isRequired,
  connectRequest: PropTypes.func.isRequired,
  disconnectRequest: PropTypes.func.isRequired,
  openChannel: PropTypes.func.isRequired,
  closeChannel: PropTypes.func.isRequired,
  currentTicker: PropTypes.object.isRequired,
  explorerLinkBase: PropTypes.string.isRequired
}


export default Wallet
