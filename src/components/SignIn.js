import React from 'react'
import { ethers } from 'ethers';
import Button from 'react-bootstrap/Button'

const logIn = async function logInBtn() {
  const provider = new ethers.providers.JsonRpcProvider('[paste moralis mainnet address]')

// MetaMask requires requesting permission to connect users accounts
 await provider.send("eth_requestAccounts", []);

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
  const signer = provider.getSigner()
}
export default function SignIn() {
  return (
    <div>
      <Button variant='outline-dark'>Sign In</Button>
      <Button variant='outline-danger'>Sign Out</Button>
    </div>
  )
}
