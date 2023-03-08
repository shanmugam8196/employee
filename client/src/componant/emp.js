import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

export default function Employee(){


    const addsubmit=async(event)=>{
        event.preventDefault();
        var datastring=new FormData(event.target);
        var config={headers :{"enctype":"multipart/form-data"}};

        await axios.post("https://employee-three-gamma.vercel.app/add",datastring,config)
        .then(function(res){
            if(res.data.status=="success"){
                alert("Inserted");
                window.location.reload();
            }
            else if(res.data.status=="error"){
                alert("Not Inserted");
                window.location.reload();
            }
        })
        .catch(function(error){
            alert(error);
            window.location.reload();
        })
    }



    const calculate=()=>{
                let bp=document.getElementById("bp").value;
                bp=parseInt(bp);
               let da=bp*0.5;
               let hra=bp*0.5;
               let gp=bp+da+hra;
               let pf=gp*0.02;
               let tax=bp*0.01;
               let deduction=tax+pf;
               let netpay=gp-deduction;
               document.getElementById("da").value=da;
               document.getElementById("hra").value=hra;
               document.getElementById("gp").value=gp;
               document.getElementById("pf").value=pf;
               document.getElementById("tax").value=tax;
               document.getElementById("deduction").value=deduction;
               document.getElementById("netpay").value=netpay;






    }
    return(
        <>
        <div className='container-fluid bg-dark p-5'>
            <div className='container table-responsive'>
                <form onSubmit={addsubmit}>
                <h4 className='text-center text-white'>Employee Details</h4>
                    <table className='table table-bordered text-white'>
                        <tr>
                            
                            <td>Name</td>
                            <td><input type="text" name="empname" id="empname" placeholder="Employee Name"/></td>
                        </tr>
                         <tr>
                            <td>Employee Id</td>
                            <td><input type="text" name="empid" id="empid" placeholder="Employee Id"/></td>
                        </tr>
                        <tr>
                            <td>Designation</td>
                            <td><input type="text" name="designation" id="designation" placeholder="designation"/></td>
                        </tr>
                        <tr>
                            <td>Basic Pay</td>
                            <td><input type="text" name="bp" id="bp" placeholder="Basic Pay" onKeyUp={calculate}/></td>
                        </tr>
                        <tr>
                            <td>Dearness Allowance</td>
                            <td><input type="text" name="da" id="da" placeholder="Dearness Allowance" /></td>
                        </tr>
                        <tr>
                            <td>House Rent Allowance</td>
                            <td><input type="text" name="hra" id="hra" placeholder="House Rent Allowance" /></td>
                        </tr>
                        <tr>
                            <td>Gross Pay</td>
                            <td><input type="text" name="gp" id="gp" placeholder="Gross Pay" /></td>
                        </tr>
                        <tr>
                            <td>Provident Funt</td>
                            <td><input type="text" name="pf" id="pf" placeholder="Provident Funt" /></td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td><input type="text" name="tax" id="tax" placeholder="Tax" /></td>
                        </tr>
                        <tr>
                            <td>Deduction</td>
                            <td><input type="text" name="deduction" id="deduction" placeholder="Deduction" /></td>
                        </tr>
                        <tr>
                            <td>NetPay</td>
                            <td><input type="text" name="netpay" id="netpay" placeholder="NetPay" /></td>
                        </tr>

                    </table>
                    <div className='text-center'>
                    <input type="submit" className='col-4 btn btn-primary'/>
                    </div>
                </form>

            </div>
        </div>
        </>
    );
}