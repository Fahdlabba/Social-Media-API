function found_name(data,name){
    for(let i=0;i<data.length;i++){
        if(data[i].name===name){
            return i
        }
    }
    return -1 ;
}


module.exports=found_name;