import React from 'react';
import { Toast, ToastHeader, ToastBody,Table } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { SomethingAlertFalse } from 'store/components/actions';

export default function Alert({message, type}) {
  const isOpen = useSelector(state => state.alertReducer.isOpen);
  const dispatch = useDispatch();
  const toggle = () => dispatch(SomethingAlertFalse());

  const backgroundColor = type === "error" ? "#e8b7bf" : "#a0deb0";

  return (
    <>
      <Toast   className='my-2 rounded' isOpen={isOpen} toggle={toggle}>
        <ToastHeader toggle={toggle} className={`d-flex justify-content-between ${type==="error"?'bg-danger':"bg-success"}`}>
          <span className='text-white'>{type}</span>
        </ToastHeader>
        <ToastBody style={{ color: "black", background: backgroundColor }}>
          {message}
        </ToastBody>
      </Toast>
    </>
  )
}
