const cpf_bloqueados = ["133.699.924-97", "700.914.751-84", "289.187.747-23"] 
const cpf_vip_liberados = ["584.639.442-00", "262.115.389-11"]

const db_cpfs = [cpf_bloqueados, cpf_vip_liberados]

const button = document.querySelector("button");
const paragrafo = document.querySelector("p");

button.addEventListener("click", pesquisarCpf)

	function pesquisarCpf() { 
			let cpf_esta_bloqueado = pesquisarCpfNaLista(input.value, db_cpfs[0])	
			let cpf_esta_vip_liberado = pesquisarCpfNaLista(input.value, db_cpfs[1])
			let cpfInput = input.value.length;

			if(cpfInput != 14){
					document.querySelector("p")
					paragrafo.style.color = "#FF0000"
					paragrafo.textContent = "Por favor informe corretamente o CPF";
				}
				else if (cpf_esta_bloqueado) {
					paragrafo.style.color = "#FF0000";
					paragrafo.textContent = "O CPF informado encontra-se BLOQUEADO";

				} else if (cpf_esta_vip_liberado) {
				  	paragrafo.style.color = "green";
					paragrafo.textContent = "O CPF informado está na lista de clientes VIP e encontra-se LIBERADO";
					
				} else {
					paragrafo.style.color = "green";
					paragrafo.textContent = "O CPF informado encontra-se LIBERADO";
				}
	}


	function pesquisarCpfNaLista(cpf_a_consultar, cpf_lista){
	
		let cpf_esta_na_lista = false;	
	
		for (i = 0; i < cpf_lista.length; i++){
					if ( cpf_a_consultar == cpf_lista[i]){
						cpf_esta_na_lista = true;
						break;	
			}
		}
		return cpf_esta_na_lista
	}