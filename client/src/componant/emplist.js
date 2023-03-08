import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Emplist(){

    const [empdetail,setEmpdetail]=useState([]);
    useEffect(()=>{
        load_empdetail();
    },[]);

    const load_empdetail=()=>{
        axios.get('https://employee-three-gamma.vercel.app/list')
        .then(function(res){
            setEmpdetail(res.data);
        })
        .catch(function(error){
            alert(error);
        })
    }


    const data_del = (a)=> {
        var datastring = {id:a};
        var config = {headers : {"enctype":"multipart/form-data"}};
 
          axios.post('https://employee-three-gamma.vercel.app/Delete',datastring,config)
               .then(function(res){
                 if(res.data.status === 'success'){
                     alert('Deleted');
                     window.location.reload();
                 }
                 else if(res.data.status === 'error'){
                     alert('Not Deleted');
                     window.location.reload();
                 }
               })
               .catch(function(error){
                     alert(error);
                     window.location.reload();
               }) 
     }
 

    return(<>
        <div className='containet-fluid bg-dark p-5'>
            <div className='table-responsive'>
                <table className='table table-bordered text-white'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Designation</th>
                            <th>Basic Pay</th>
                            <th>Dearness Allowance</th>
                            <th>House Rent Allowance</th>
                            <th>Gross Pay</th>
                            <th>Provident Funt</th>
                            <th>Tax</th>
                            <th>Deduction</th>
                            <th>NetPay</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                empdetail.map((value,index)=>(
                                    <tr>
                                        <td>{value.empname}</td>
                                        <td>{value.empid}</td>
                                        <td>{value.designation}</td>
                                        <td>{value.bp}</td>
                                        <td>{value.da}</td>
                                        <td>{value.hra}</td>
                                        <td>{value.gp}</td>
                                        <td>{value.pf}</td>
                                        <td>{value.tax}</td>
                                        <td>{value.deduction}</td>
                                        <td>{value.netpay}</td>
                                        <td>
                                        <Link to={'/Edit/'+value.id} className="data_edit">
                                        <button type="button" className="btn btn-success">
                                        {/* <FontAwesomeIcon icon={faEdit}/> */}
                                        &nbsp;Edit
                                        </button>   </Link>
                                        </td>
                                        <td>                                    
                                        <button type="button" id="data_del" name="data_del" onClick={()=>data_del(value.id)} className="btn btn-danger">
                                        {/* <FontAwesomeIcon icon={faTrash}/> */}
                                        &nbsp;Delete
                                        </button>
                                        </td>
                                    </tr>
                                ))
                            }
                    </tbody>
                </table>
            </div>
        </div>
    </>
    );
}