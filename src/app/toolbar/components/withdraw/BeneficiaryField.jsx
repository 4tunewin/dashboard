import React from 'react';
import { Dropdown } from '../../../common';

const { web3 } = window;

const options = [
    {
        value: web3.eth.accounts[0],
        text: 'Your wallet',
        description: web3.eth.accounts[0],
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
