
class Airline { 
  constructor(name, enabled, whitelist = [], blacklist = []){
    this.name = name;
    this.enabled = enabled;
    this.whitelist = whitelist;
    this.blacklist = blacklist;
  }

  getName(){
    return this.name;
  }
  setName(name){
    this.name = name;
  }

  airlineEnabled(){
    return this.enabled;
  }
  changeAirlineStatus(){
    this.enabled = this.enabled ? false : true; 
  }

  addItemToWhiteList(item){
    /* Melhorar: só adicionar o item se ele ainda não estiver na whitelist */
    this.whitelist.push(item);
  }
  removeItemFromWhiteList(item){
    /* Procuro o index do elemento no array */
    const index = this.whitelist.indexOf(item);

    /* Se o item está no array, ou seja, index > -1 */
    if(index != -1){
      /* Uso o splice para remover o item -> Pesquisar mais sobre esse método */
      this.whitelist.splice(index, 1);
    }
  }
  getWhiteList(){
    return this.whitelist;
  }

  /* Implementar os métodos da black list também */

} 

export { Airline };