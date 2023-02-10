import React, { useState } from 'react';

const Modal = (isOpened, contentState) => {
  console.log('isOpened: ', isOpened);
  if (!isOpened) {
    console.log('isOpened: ', isOpened);
    return null;
  } else {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Description</h2>
            <span className="close">&times;</span>
          </div>

          <div className="modal-body"></div>
          <div className="modal-footer">
            <button>Save</button>
          </div>
        </div>
      </div>
    );
  }
  // switch (isOpened && contentState) {
  //   case true && 'advertising':
  //     <div className="modal">
  //       <div className="modal-content">
  //         <div className="modal-header">
  //           <h2>Description</h2>
  //           <span className="close">&times;</span>
  //         </div>
  //         <div className="modal-body"></div>
  //         <div className="modal-footer">
  //           <button>Save</button>
  //         </div>
  //       </div>
  //     </div>;
  //   case true && 'description':
  //     <div className="modal">
  //       <div className="modal-content">
  //         <div className="modal-header">
  //           <h2>Description</h2>
  //           <span className="close">&times;</span>
  //         </div>
  //         <div className="modal-body"></div>
  //         <div className="modal-footer">
  //           <button>Save</button>
  //         </div>
  //       </div>
  //     </div>;

  //   case true && 'features':
  //     <div className="modal">
  //       <div className="modal-content">
  //         <div className="modal-header">
  //           <h2>Features</h2>
  //           <span className="close">&times;</span>
  //         </div>
  //         <div className="modal-body"></div>
  //         <div className="modal-footer">
  //           <button>Save</button>
  //         </div>
  //       </div>
  //     </div>;

  //   case false:
  // }
};

export default Modal;
