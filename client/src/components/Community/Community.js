import React from 'react'
import './Community.css'
export default function Community() {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-8">
                        <div className="d-flex flex-row align-items-center add-comment p-2 bg-white rounded"><img className="rounded-circle" src="https://i.imgur.com/QvDFBCC.jpg" width="40" alt='' /><input type="text" className="form-control border-0 no-box-shadow ml-1" placeholder="Leave a constructive comment..." /></div>
                        <div className="p-3 bg-white mt-2 rounded">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row user"><img className="rounded-circle img-fluid img-responsive" alt='' src="https://i.imgur.com/Yxje2El.jpg" width="40" />
                                    <div className="d-flex flex-column ml-2"><span className="font-weight-bold">@Nick</span><span className="day">1 day ago</span></div>
                                </div>
                                <div className="d-flex align-items-center px-3 heart border"><i className="fa fa-heart heart-icon"></i><span className="ml-2">35</span></div>
                            </div>
                            <div className="comment-text text-justify mt-2">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                        <div className="p-3 bg-white mt-2 rounded">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row user"><img className="rounded-circle img-fluid img-responsive" alt='' src="https://i.imgur.com/JXZLwEY.jpg" width={40} />
                                    <div className="d-flex flex-column ml-2"><span className="font-weight-bold">@Samantha</span><span className="day">2 days ago</span></div>
                                </div>
                                <div className="d-flex align-items-center px-3 heart border"><i className="fa fa-heart-o heart-icon"></i><span className="ml-2">35</span></div>
                            </div>
                            <div className="comment-text text-justify mt-2">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="d-flex justify-content-end align-items-center comment-buttons mt-2 text-right"><span className="mr-3 delete">Delete</span><button className="btn btn-success btn-sm border-0 px-3" type="button">Edit</button></div>
                        </div>
                        <div className="p-3 bg-white mt-2 rounded text-center">
                            <h5>Join the community to comment</h5><button className="btn btn-success btn-sm px-3" type="button">Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
