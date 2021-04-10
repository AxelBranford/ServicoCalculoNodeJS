module.exports = {
    meth(numA, option, numB){
        if(option === "+"){
            return numA + numB
        }
        else if(option === "-"){
            return numA - numB
        }
        else if(option === "*"){
            return numA * numB
        }
        else if(option === "/"){
            return numA / numB
        } else{
            return "Não é uma operação válida"
        }
    }
}