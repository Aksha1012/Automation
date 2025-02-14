let length=5;
for(let i=1;i<=length;i++){
    let r="";
    for(let j=1;j<=i;j++){
        r +=j;
 
    }
    console.log(r);
}
for(var i=1;i<=length;i++){
    let r='';
    for(let j=1;j<=i;j++){
        r=r+i;
    }
    console.log(r);
}