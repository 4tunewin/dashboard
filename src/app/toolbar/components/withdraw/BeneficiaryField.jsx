import React from 'react';
import { Select } from '../../../common';

const { web3 } = window;

const options = [
    {
        value: web3.eth.accounts[0],
        text: 'Your wallet',
        description: web3.eth.accounts[0],
    },
];

const BeneficiaryField = props => (
    <Select {...props} options={options} placeholder="Beneficiary" fluid />
);

export default BeneficiaryField;
