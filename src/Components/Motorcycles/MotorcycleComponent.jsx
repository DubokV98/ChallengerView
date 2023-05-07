import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import MotorcycleService from '../../Services/MotorcycleService'
import BrandService from '../../Services/BrandService';

function MotorcycleComponent() {
    const navigate = useNavigate();
    const [motorcycles, setMotorcycles] = useState([]);
    const [brands, setBrands] = useState([]);
    const [selectValue, setSelectValue] = useState('all');

    const navigateToPage = (url) => {
        navigate(url)
    }
    
    const init = () => {
        getBrands();
        getMotorcycles('all');
    }

    useEffect(() => {
       init()
    }, [])

    const getBrands = () => {
        BrandService.getBrands().then((response) => {
            setBrands(response.data)
        }).catch(error => {
            console.log(error);
        });
    }

    const getMotorcycles = (brandId) => {
        if (brandId !== 'all') {
            MotorcycleService.getMotorcyclesByBrandId(brandId).then((response) => {
                setMotorcycles(response.data)
            }).catch(error => {
                console.log(error);
            });
        } else {
            MotorcycleService.getMotorcycles().then((response) => {
                setMotorcycles(response.data)
            }).catch(error => {
                console.log(error);
            });
        }
    }

    const brandValueChanged = (e) => {
        e.preventDefault();
       setSelectValue(e.target.value);
       getMotorcycles(e.target.value);
    }

    return (
        <div>
            <select className="form-select" value={selectValue} onChange={e => brandValueChanged(e)} aria-label="Default select example">
                <option selected key={'all'}>all</option>
                {
                    brands.map(
                        brand =>
                            <option key={brand.id} value={brand.id}>{brand.token}</option>
                    )
                }
            </select>
            <h2 className="text-center">Motorcycles</h2>
            <div id="pricing" className="container-fluid">
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>model</th>
                                <th>year</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                motorcycles.map(
                                    motorcycle =>
                                        <tr key={motorcycle.id}>
                                            <td>{motorcycle.model}</td>
                                            <td>{motorcycle.year}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default MotorcycleComponent;