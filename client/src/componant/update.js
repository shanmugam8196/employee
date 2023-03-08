import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

export default function Update(){


    const {id} = useParams();
    const [empname,setEmpname] = useState('');
    const [empid,setEmpid] = useState('');
    const [designation,setDesignation] = useState('');
    const [bp,setBp] = useState('');
    const [da,setDa] = useState('');
    const [hra,setHra] = useState('');
    const [gp,setGp] = useState('');
    const [pf,setPf] = useState('');
    const [tax,setTax] = useState('');
    const [deduction,setDeduction] = useState('');
    const [netpay,setNetpay] = useState('');
 

    useEffect(()=>{
        console.warn(id);

        fetch("https://emp-crud.vercel.app/Editlist/"+id)
        .then((response) => response.json())
        .then((response)=>{
            setEmpname(response[0].empname);
            setEmpid(response[0].empid);
            setDesignation(response[0].designation);
            setBp(response[0].bp);
            setDa(response[0].da);
            setHra(response[0].hra);
            setGp(response[0].gp); 
            setPf(response[0].pf); 
            setTax(response[0].tax); 
            setDeduction(response[0].deduction); 
            setNetpay(response[0].netpay); 
        })
          
    },[]);




    const addsubmit = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers : {"enctype":"multipart/form-data"}};

        await axios.post('https://emp-crud.vercel.app/update',datastring,config)
              .then(function(res){
                if(res.data.status === 'success'){
                    alert('Updated');
                    window.location.href="/";
                }
                else if(res.data.status === 'error'){
                    alert('Not Updated');
                    window.location.href="/";
                }
              })
              .catch(function(error){
                    alert(error);
                    window.location.href="/";
              })

    }





    return(
        <>
          <div className='container-fluid bg-primary p-5'>
            <Link to="/"> <button>Go Back</button></Link>
            <div className='container table-responsive'>
                <form onSubmit={addsubmit}>
                <h4 className='text-center text-white'>Employee Details</h4>
                    <table className='table table-bordered text-white'>
                        <tr>
                        <input type="hidden" name="id" id="id" value={id}/>
                            <td>Name</td>
                            <td><input type="text" name="empname" id="empname" value={empname} onChange={(e)=> setEmpname(e.target.value)}/></td>
                        </tr>
                         <tr>
                            <td>Employee Id</td>
                            <td><input type="text" name="empid" id="empid" value={empid} onChange={(e)=> setEmpid(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Designation</td>
                            <td><input type="text" name="designation" id="designation" value={designation} onChange={(e)=> setDesignation(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Basic Pay</td>
                            <td><input type="text" name="bp" id="bp" value={bp} onChange={(e)=> setBp(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Dearness Allowance</td>
                            <td><input type="text" name="da" id="da" value={da} onChange={(e)=> setDa(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>House Rent Allowance</td>
                            <td><input type="text" name="hra" id="hra" value={hra} onChange={(e)=> setHra(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Gross Pay</td>
                            <td><input type="text" name="gp" id="gp" value={gp} onChange={(e)=> setGp(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Provident Funt</td>
                            <td><input type="text" name="pf" id="pf" value={pf} onChange={(e)=> setPf(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td><input type="text" name="tax" id="tax" value={tax} onChange={(e)=> setTax(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Deduction</td>
                            <td><input type="text" name="deduction" id="deduction" value={deduction} onChange={(e)=> setDeduction(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>NetPay</td>
                            <td><input type="text" name="netpay" id="netpay" value={netpay} onChange={(e)=> setNetpay(e.target.value)} /></td>
                        </tr>

                    </table>
                    <div className='text-center'>
                    <button type="submit" className='col-4 p-2x' name="data_submit" id="data_submit">Update</button>
                    </div>
                </form>

            </div>
        </div>
      
        </>
    );
}