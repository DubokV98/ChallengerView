import React, { useEffect, useState } from 'react';
import PurposeService from '../../Services/PurposeService';
import { Link, useNavigate } from 'react-router-dom';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import PropTypes, { func } from 'prop-types'
import classes from './Purpose.css'

// class PurposeComponent extends Component {

//     state = {
//         purposes: []
//     }

//     addPurposes = () => {
//         console.log(this.props)
//         //this.props.history.push('/')
//         // history.push('/purposes/create')
//     }

//     componentDidMount() {
//         PurposeService.getPurposes().then((response) => {
//             this.setState({ purposes: response.data });
//         });
//     }

//     render() {
//         return (
//             <div className={classes.PurposeComponent}>
//                 <h2 className="text-center">Purposes</h2>
//                 <div id="pricing" className="container-fluid">
//                     <div className='row'>
//                         <NavLink to='/purposes/create' className='navbar-brand text-black'>create new</NavLink>
//                     </div>
//                     <div className="row">
//                         <table className="table table-striped table-bordered">
//                             <thead>
//                                 <tr>
//                                     <th>name</th>
//                                     <th>description</th>
//                                     <th>actions</th>
//                                 </tr>
//                             </thead>

//                             <tbody>
//                                 {
//                                     this.state.purposes.map(
//                                         purpose =>

//                                             <tr key={purpose.id}>
//                                                 <td>{purpose.name}</td>
//                                                 <td>{purpose.description}</td>
//                                                 <td>
//                                                     <NavLink to='/purposes/update/${purpose.id}'className='navbar-brand text-black'>Edit</NavLink>
//                                             </td>
//                                             </tr>
//                             ) }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//             </div >
//         );
//     }
// }

export default function PurposeComponent() {

    const navigate = useNavigate();
    const [purposes, setPurposes] = useState([]);

    const navigateToPage = (url) => {
        navigate(url)
    }

    useEffect(() => {
        getAllEmployees();
    }, [])

    const deletePurpose = (id) => {
        PurposeService.deletePurpose(id).then((resonse) => {
            getAllEmployees();

        }).catch(error => {
            console.log(error);
        })
    }

    const getAllEmployees = () => {
        PurposeService.getPurposes().then((response) => {
            setPurposes(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className={classes.PurposeComponent}>
            <h2 className="text-center">Purposes</h2>
            <div id="pricing" className="container-fluid">
                <div className='row'>
                    <button onClick={() => navigateToPage('/purposes/create')} className='navbar-brand text-black'> Add new</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>description</th>
                                <th>actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                purposes.map(
                                    purpose =>

                                        <tr key={purpose.id}>
                                            <td>{purpose.name}</td>
                                            <td>
                                                {purpose.description}
                                            </td>
                                            <td>
                                                <Link className="btn btn-info" to={'/purposes/update/' + purpose.id}>Update</Link>
                                                <button className="btn btn-danger" onClick={() => deletePurpose(purpose.id)}
                                                > Delete</button>
                                            </td>
                                        </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}

// PurposeComponent.propTypes = {
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string
// }