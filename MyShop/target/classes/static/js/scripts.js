/**
 * 
 */
 
 
 
 /* ...... SCRIPT QUE SIRVE PARA BLOQUEAR o DESBLOQUEAR LA DIRECCIÓN DE ENVÍO CUANDO VAMOS A COMPRAR ALGO.......*/
 function checkBillingAddress() {
	if($("#theSameAsShippingAddress").is(":checked")) {
		$(".billingAddress").prop("disabled", true);
	} else {
		$(".billingAddress").prop("disabled", false);
	}
}

/*........SCRIPT PARA DECIR SI EL PASSWORD ES CORRECTO O NO...............*/

function checkPasswordMatch() {
	var password = $("#txtNewPassword").val();
	var confirmPassword = $("#txtConfirmPassword").val();
	
	if(password == "" && confirmPassword =="") {
		$("#checkPasswordMatch").html("");
		$("#updateUserInfoButton").prop('disabled', false);
	} else {
		if(password != confirmPassword) {
			$("#checkPasswordMatch").html("Passwords do not match!");
			$("#updateUserInfoButton").prop('disabled', true);
		} else {
			$("#checkPasswordMatch").html("Passwords match");
			$("#updateUserInfoButton").prop('disabled', false);
		}
	}
}

 
 
 /* ...... SCRIPT PARA PODER CONTROLAR EL NÚMERO DE PRODUCTOS DE NUESTRO CARRITO.......*/
 $(document).ready(function(){
	$(".cartItemQty").on('change', function(){
		var id=this.id;
		
		$('#update-item-'+id).css('display', 'inline-block');
	});
	$("#theSameAsShippingAddress").on('click', checkBillingAddress);
	$("#txtConfirmPassword").keyup(checkPasswordMatch);
	$("#txtNewPassword").keyup(checkPasswordMatch);
});
/*......................................................................................*/