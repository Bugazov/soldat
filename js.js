const solider ={
    name:'Islam',
    zdrav: 2,
    weapon: {
        nameweapon: "Avtomat",
        number:30
    },
    supplies:3,
    shoot:function(){
        if(this.weapon.number ==0){
            console.log('Обойма пуста,перезарядитесь')
        }else{
        this.weapon.number --;
        console.log('Бах - бах')}
    },
    recharge:function(){
        if(this.supplies == 0){
            console.log("Не осталось припасов")
        }else{
            this.weapon.number = 0;
            this.supplies--
            console.log('перезарядка...')
        }
    },
    toHurt:function(){
        this.zdrav--
        if(this.zdrav ==0){
            console.log("Ты проиграл")
        }
    },
}
solider.toHurt()