<<<<<<< HEAD
const mysql = require('mysql');
const mysqlConnection=mysql.createConnection({
host:'bo2aeq5eigqfskpl7o1l-mysql.services.clever-cloud.com',
user:'ucuxylf3ti3uses3',
password:'xiBdsQU3jaZ40t3KGedl',
database:'bo2aeq5eigqfskpl7o1l',
multipleStatements:true
});//fin conexión
=======
const mysql =require('mysql');
const mysqlConnection= mysql.createConnection({
host:'b1ktqxmnioxqrfgsszfd-mysql.services.clever-cloud.com',
user:'uai4ijj5atwzvz2u',
password:'uai4ijj5atwzvz2u',
database:'b1ktqxmnioxqrfgsszfd',
multipleStatements:true
});
>>>>>>> f7bd3d4bc638591241c276fc989ffcb4f367c2b7

mysqlConnection.connect(function(err){
if(err){
    console.error(err);
    return;
}else{
<<<<<<< HEAD
    console.log('Base de datos conectada')
}

});

=======

    console.log('base de datos conectada');
}

})
>>>>>>> f7bd3d4bc638591241c276fc989ffcb4f367c2b7
module.exports = mysqlConnection;