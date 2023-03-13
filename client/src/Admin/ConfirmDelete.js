import React from 'react'

export default function ConfirmDelete(props) {
    const id = props.id;
    return (
        <div>
            <div class="modal fade" id="deleteconirmationmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title fs-5" id="exampleModalLabel">Confimration!</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to delete permanently
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-outline-danger" onClick={()=>props.delete(id)} data-bs-dismiss="modal">Conifrm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
