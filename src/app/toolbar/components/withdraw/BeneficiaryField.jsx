import React from 'react';
import { Dropdown } from '../../../common';

const options = [
    {
        value: window.web3.eth.accounts[0],
        text: 'Your wallet',
        description: window.web3.eth.accounts[0],
    },
];

const BeneficiaryField = props => (
    <Dropdown
        {...props}
        options={options}
        placeholder="Beneficiary"
        fluid
        selection
    />
);

export default BeneficiaryField;
