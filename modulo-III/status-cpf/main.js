const cpf_bloqueados = ["133.699.924-97", "700.914.751-84", "289.187.747-23"] 
const cpf_vip_liberados = ["584.639.442-00", "262.115.389-11"]

const db_cpfs = [cpf_bloqueados, cpf_vip_liberados]

const input = document.querySelector('input')
input.focus();

input.addEventListener('keypress', () => {
    let inputLength = input.value.length

    // MAX LENGHT 14  CPF
    if (inputLength == 3 || inputLength == 7) {
        input.value += '.'
    }else if (inputLength == 11) {
        input.value += '-'
    }

// ****************************************************************************************************

const button = document.querySelector("button");
const paragrafo = document.querySelector("p");

button.addEventListener("click", pesquisarCpf)
	const cpfNaListaIncorreto = input.value;
	function pesquisarCpf() { 
			let cpf_esta_bloqueado = pesquisarCpfNaLista(cpfNaListaIncorreto, db_cpfs[0])	
			let cpf_esta_vip_liberado = pesquisarCpfNaLista(cpfNaListaIncorreto, db_cpfs[1])

			if (cpfNaListaIncorreto != 14) {
				paragrafo.style.color = "red";
				paragrafo.innerHTML = "Digite o CPF corretamente";
			} else if (cpf_esta_bloqueado) {
						paragrafo.style.color = "red";
						paragrafo.innerHTML = "O CPF informado encontra-se BLOQUEADO";

				} else if (cpf_esta_vip_liberado) {
				  		paragrafo.style.color = "green";
						paragrafo.innerHTML = "O CPF informado está na lista de clientes VIP e encontra-se LIBERADO";
					
				} else {
						paragrafo.style.color = "green";
						paragrafo.innerHTML = "O CPF informado encontra-se LIBERADO";
				}
	}

/*	
	function pesquisarCpfBloqueado(cpf_a_consultar, cpf_bloqueados) { 

		let cpf_esta_bloqueado = false;

		for (i = 0; i < cpf_bloqueados.length; i++) {
				if ( cpf_a_consultar == cpf_bloqueados[i]) {
						cpf_esta_bloqueado = true;
						break;
				}
		}
		return cpf_esta_bloqueado
	}

	function pesquisarCpfVipLiberado(cpf_a_consultar, cpfVip_liberado){
	
		let cpf_esta_vip_liberado = false;	
	
		for (i = 0; i < cpfVip_liberado.length; i++){
					if ( cpf_a_consultar == cpfVip_liberado[i]){
						cpf_esta_vip_liberado = true;
						break;	
			}
		}
		return cpf_esta_vip_liberado
	}
*/


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
})

	
