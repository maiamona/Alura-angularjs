exports.myDateTime = ()=>{
    return Date();
     
};

exports.year = ()=>{
    var dataAtual = new Date();
    return dataAtual.getFullYear();
     
};

exports.month = ()=>{
    var mes = new Date();
    return mes.getMonth();
     
};