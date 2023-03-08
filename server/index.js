const express=require('express');
const cors=require('cors');
const mysql=require('mysql');
const bodyparser=require('body-parser');
const fileupload=require('express-fileupload');

const app=express();

app.use(cors());
app.use(fileupload());
app.use(bodyparser.json());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

const c=mysql.createConnection({
    host:"sql12.freemysqlhosting.net",
    port:"3306",
    user:"sql12603380",
    password:"U8aZiPjIAk",
    database:"sql12603380"
})

c.connect(function(err){
    if(err){console.log(err)}
    else {console.log('Database Connected')}
})

app.post('/add',(request,response)=>{
    let {empname,empid,designation,bp,da,hra,gp,pf,tax,deduction,netpay}=request.body;
    let sql='insert into employee(empname,empid,designation,bp,da,hra,gp,pf,tax,deduction,netpay)values(?,?,?,?,?,?,?,?,?,?,?)';
    c.query(sql,[empname,empid,designation,bp,da,hra,gp,pf,tax,deduction,netpay],(error,result)=>{
        if(error){
            let s={"status":"error"}
       
            response.send(s);
        }
        else {
            let s={"status":"success"}
            response.send(s);
        }

    })
})

app.get('/list',(request,response)=>{
    let sql='select * from employee';

    c.query(sql,(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})

// app.post('/update',(request,response)=>{
//     let {id,empname,empid,designation,bp,da,hra,gp,pf,tax,deduction,netpay} = request.body;
//     let sql='update employee set empname=?,empid=?,designation=?,bp=?,da=?,hra=?,gp=?,pf=?,tax=?,deduction=?,netpay=? where id=?';
//     c.query(sql,[empname,empid,designation,bp,da,hra,gp,pf,tax,deduction,netpay,id],(error,result)=>{
//         console.log(id)
//         if(error){
//             let s={"status":"error"}
       
//             response.send(s);
//         }
//         else {
//             let s={"status":"success"}
//             response.send(s);
         
//         }

//     })
// })

app.post('/update',(request,response)=>{
    let {id,empname,empid,designation,bp,da,hra,gp,pf,tax,deduction,netpay} = request.body;
    
    let sql = 'update employee set empname=?,empid=?,designation=?,bp=?,da=?,hra=?,gp=?,pf=?,tax=?,deduction=?,netpay=? where id=?';

    c.query(sql,[empname,empid,designation,bp,da,hra,gp,pf,tax,deduction,netpay,id],(error,result)=>{
        console.log(id)
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"success"};
            response.send(s);
            // console.log(result);
        }
    })

})

app.post('/Delete',(request,response)=>{
    let id = request.body.id;
    let sql = 'delete from employee where id=?';
    c.query(sql,[id],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"success"};
            response.send(s);
        }
    })
})

app.get('/Editlist/:id',(request,response)=>{
    let {id} = request.params;
    let sql= 'select * from employee where id=?';
    c.query(sql,[id],(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})




app.listen(3500);