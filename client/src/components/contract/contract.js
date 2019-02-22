import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import { getContract } from '../../actions/contractActions';
import ContractItem from '../contracts/ContractItem'

class Contract extends Component {
  componentDidMount() {
    this.props.getContract(this.props.match.params.id);
  }
    
    render() {
        const { contract, loading } = this.props.contract;
        let contractContent;

        if (contract === null || loading || Object.keys(contract).length === 0) {
            contractContent = <Spinner />;
        } else {
            contractContent = <ContractItem key={contract._id} contract={contract} />;
        }

        return (
            <div className="contract">
            <div className="container">
                <div className="row">
                <div className="col-md-12">>
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

export default connect(mapStateToProps, { getContract })(Contract);
