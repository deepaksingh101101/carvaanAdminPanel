import React from 'react'
import { Spinner } from 'reactstrap';

export default function Loader() {
  return (
  <div className='loader container d-flex h-100 align-items-center justify-content-center' >
  <Spinner
    color="danger"
    type="grow"
  >
    Loading...
  </Spinner>
  </div>
  )
}
