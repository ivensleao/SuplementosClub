$("#btnLogin").click(function() {
	var login = $("#txtLogin").val();
	var password = $("#txtPassword").val();
 	
 	if((login == "" || login == null || login  != "admin") || (password == "" || password == null || password != "teste123")){
 			$("#divError").removeClass('hide');
 			$("#divError").addClass('show');
 	}
 	else{   
 			$("#divError").removeClass('show');
 			$("#divError").addClass('hide'); 	

 			window.location.href='dashboard.html';		
 	}
});