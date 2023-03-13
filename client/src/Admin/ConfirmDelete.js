import React from 'react'

export default function ConfirmDelete(props) {
    const id = props.id;
    return (
        <div>
            <div className="modal fade" id="deleteconirmationmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title fs-5" id="exampleModalLabel">Confimration!</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete permanently
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-outline-danger" onClick={()=>props.delete(id)} data-bs-dismiss="modal">Conifrm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
