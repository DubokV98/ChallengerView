import PurposeService from '../../Services/PurposeService'
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function PurposeCreateComponent() {
    const navigate = useNavigate();

    const { id } = useParams();
    const [name, setName] = useState('')
    const [token, setToken] = useState('')
    const [description, setDescription] = useState('')

    const navigateToPage = (url) => {
        navigate(url)
    }

    const saveOrUpdatePurpose = (e) => {
        e.preventDefault();
        const purpose = { id, name, token, description };

        if (id) {
            PurposeService.updatePurpose(purpose).then((response) => {
                navigateToPage('/purposes');
            }).catch(error => {
                console.log(error)
            })
        } else {
            PurposeService.createPurpose(purpose).then((response) => {
                navigateToPage('/purposes');
            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {
        PurposeService.getPurposeById(id).then((response) => {
            setName(response.data.name)
            setDescription(response.data.description)
            setToken(response.data.token)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if (id) {
            return <h2 className="text-center">Update Purpose</h2>
        } else {
            return <h2 className="text-center">Add Purpose</h2>
        }
    }

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            {/* <form> */}
                                <div className="form-group mb-2">
                                    <label className="form-label"> Name:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter name"
                                        name="name"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Token:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter name"
                                        name="name"
                                        className="form-control"
                                        value={token}
                                        onChange={(e) => setToken(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="exampleFormControlTextarea1"> Description:</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" defaultValue={description}
                                        onChange={(e) => setDescription(e.target.value)}/>
                                </div>
                                <button className="btn btn-success" onClick={(e) => saveOrUpdatePurpose(e)} > Submit </button>
                                <button className="btn btn-danger" onClick={() => navigateToPage('/purposes')}> Cancel </button>
                            {/* </form> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}