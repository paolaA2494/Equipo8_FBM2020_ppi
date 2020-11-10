<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

router.get('/registro',(req,res)=>{
    mysqlConnection.query('SELECT * FROM registro  ',(err,rows,fiels)=>{
    //si no hay error
        if(!err){
    //haga esto
    res.json(rows);
    }else{
        //si no (si hay un error)
        console.log(err);
    }//fin si
    });//fin query
    });//fin retorno de todos los estudiantes
    
    
module.exports =router;
=======
const express =require('express');
const router = express.Router();
const mysqlConnection= require('../db/db');


router.get('/estudiantes',(req,res)=>{
mysqlConnection.query('SELECT * from actores ',(err,rows,fiels)=>{
if(!err){
   res.json(rows); 
}else{
console.log(err);
}});
})// fin

router.post('/nuevo-estudiante',(req,res)=>{
const {nombres,apellidos,correo,documento,telefono_celular,fecha_nacimiento,institucion_id}=req.body;

let alumno =[nombres,apellidos,correo,documento,telefono_celular,fecha_nacimiento,institucion_id];

let nuevoAlumno =`INSERT INTO actores(nombres,apellidos,correo,documento,telefono_celular,fecha_nacimiento,institucion_id)
VALUES(?,?,?,?,?,?,?)`;
mysqlConnection.query(nuevoAlumno,alumno,(err,results,fields)=>{
if(err){
   return console.error(err.message);
}else{
   res.json({message:`Alumno matriculado`})
}
})});
router.put('/estudiante/:id',(req,res)=>{
   const {nombres,apellidos,correo,documento,telefono_celular,fecha_nacimiento,institucion_id}=req.body;
    const {id} =req.params;
   
   
   mysqlConnection.query(`UPDATE actores SET nombres=?,apellidos=?,correo=?,documento=?,
   telefono_celular=?,fecha_nacimiento=?,institucion_id=? WHERE id=?`,
   [nombres,apellidos,correo,documento,telefono_celular,fecha_nacimiento,institucion_id,id],(err,rows,fields)=>{
   if(!err){
      
      res.json({status:`Alumno Actualizado`});
   }else{
      console.log(err);
   }
   })});

   router.get('/estudiante/:id',(req,res)=>{
      const {id} =req.params;
      mysqlConnection.query('SELECT * from actores where id= '+id,(err,rows,fiels)=>{
      if(!err){
         res.json(rows); 
      }else{
      console.log(err);
      }});
      })// fin

module.exports=router;
>>>>>>> f7bd3d4bc638591241c276fc989ffcb4f367c2b7
