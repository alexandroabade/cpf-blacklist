const dbCpfBloqueado = ["133.699.924-97", "700.914.751-84", "289.187.747-23"];
const dbCpfVipLiberado = ["584.639.442-00", "262.115.389-11"];

let matrizDbDados = [dbCpfBloqueado, dbCpfVipLiberado];

function chamarCpf() {
  if (prompt() == db_cpf[0]) {
    console.log("O CPF informado encontra-se BLOQUEADO");
  } else if (prompt() == db_cpf[1]) {
    console.log(
      "O CPF informado está na lista de clientes VIP e encontra-se LIBERADO"
    );
  } else {
    console.log("O CPF informado encontra-se LIBERADO");
  }
}