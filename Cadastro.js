
function Cadastrar () {
        var db = openDatabase('Reino', '1.0', 'Test DB', 2097152);
        var msg;
		
		
		var vnome = document.getElementById("Name");
		var vemail = document.getElementById("Email");
		var vnote = document.getElementById("note");
		
		var sql2 = 'insert into Clientes (id, nome, email) VALUES ("5","'+vnome.value+'","'+vemail.value+'")';
		
        db.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS Clientes (id, nome, email) ');
			tx.executeSql(sql2);
        });
		DoSubmit();
		
};

function DoSubmit(){
		document.getElementById('Name').value = '';
		document.getElementById('Email').value = '';
		document.getElementById('note').value = '';
		document.getElementById("Name").focus();
};





  
	

	