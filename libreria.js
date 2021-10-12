function validar_usuario(){
			usu=document.form1.txtUsuario.value
			pass=document.form1.txtPass.value
			if(usu=="miguel"){
				if(pass=="javascript"){
					alert('Bienvenido: '+usu)
					location='http://www.gmail.com'
				}else{
					alert(usu + " Tu clave esta errada")
					document.form1.txtPass.focus()
					document.form1.txtPass.select()
				}
			}else{
				alert( usu+' Ud. no esta registrado')
				document.form1.txtUsuario.focus()
				document.form1.txtUsuario.select()
			}
		}

function validar_usuario2(){
	usu=document.form1.txtUsuario.value
	pass=document.form1.txtPass.value
	switch(usu){
		case "miguel":
			if(pass=="abc"){
				alert('Bienvenido: '+ usu)
				location:'http://www.gmail.com'
			}else{
				alert(usu+ " tu clave es incorrecta")
			}
			break
		case "cesar":
			if(pass=="xyz"){
				alert('Bienvenido: '+ usu)
				location:'http://www.gmail.com'
			}else{
				alert(usu+ " tu clave es incorrecta")
			}
			break
		default:
			alert(usu + "Ud. no esta registrado")

	}
}