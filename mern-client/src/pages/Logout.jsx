import React, { useContext, useState } from 'react'
import { Button, Modal } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Logout = () => {
    const [openModal, setOpenModal] = useState("");
  const props = { openModal, setOpenModal };


//   use context 
const {logOut} = useContext(AuthContext);

  const hangleSignOut = () => {
    // console.log("sign out");
    logOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
  }
  return (
    <div className='h-screen flex items-center justify-center'>
        <Button onClick={() => props.setOpenModal('default')}>Click here to Logout</Button>
      <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Unions General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
              ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
              possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/" onClick={hangleSignOut}><Button onClick={() => props.setOpenModal(undefined)}>Yes, I want to sign out!</Button></Link>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Logout