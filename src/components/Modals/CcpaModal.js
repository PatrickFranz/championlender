import React from 'react'
import { Modal } from 'react-bootstrap'

const content = {
  header: 'California Consumer Privacy Act (CCPA) Disclosure',
  sub_header: 'Last Update: 4/7/2021',
  body:
    'California: In accordance with the California Financial Privacy Act, if you are a resident of the State of California and would like to opt-out from the disclosure of your personal informationto any third-party for marketing purposes, please contact us at info@championlender.com',
  email: 'info@championlender.com',
}
export default function CcpaModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h4>{content.header}</h4>
      </Modal.Header>
      <Modal.Body>
        <h5>
          <p>{content.sub_header}</p>
        </h5>
        {content.body}
      </Modal.Body>
    </Modal>
  )
}
