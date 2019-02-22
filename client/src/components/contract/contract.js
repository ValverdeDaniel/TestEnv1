import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import { getContract, voteContract } from '../../actions/contractActions';
import ContractDetail from './ContractDetail'

class Contract extends Component {
  componentDidMount() {
    this.props.getContract(this.props.match.params.id);
  }

  onClickAccept = () => {
    const { voteContract, contract } = this.props
    voteContract(contract.contract._id, {userSay: "accept"});
  }

  onClickDecline = () => {
    const { voteContract, contract } = this.props
    voteContract(contract.contract._id, {userSay: "decline"});
  }

    render() {
        const { contract, loading } = this.props.contract;
        let contractContent;

        if (contract === null || loading || Object.keys(contract).length === 0) {
            contractContent = <Spinner />;
        } else {
            contractContent = (
                <div>
                    <ContractDetail contract={contract} />
                    <div>
                    <button onClick={this.onClickAccept}>Accept</button>
                    <button onClick={this.onClickDecline}>Decline</button>
                    </div>
                </div>
                );
        }

        return (
            <div className="contract">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    {contractContent}
                </div>
                </div>
            </div>
            </div>
        );
    }
}

Contract.propTypes = {
  getContract: PropTypes.func.isRequired,
  contract: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  contract: state.contract
});

export default connect(mapStateToProps, { getContract, voteContract })(Contract);
