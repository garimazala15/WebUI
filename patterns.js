for(let i=0;i<=5;i++){
    for(let j=5;j>=3;j--){
        let con=""
        for(let k=1;k<=2;k++){
            con+=k + " "
        }
        console.log(con)
    }
}


for(let i=1;i<=5;i++){
    let con=""
    for(let j=1;j<=i;j++){
        con+="*"+" "
    }
    console.log(con)
}

console.log("---------------")


for(let i=1;i<=5;i++){
    let con=""
    for(let j=5;j>=i;j--){
        con+="*"+" "
    }
    console.log(con)
}

console.log("-----------------")

/* *
   **
   ***
   ****
   *****
   *****
   ****
   ***
   **
   *
   
*/
for(let i=1;i<=10;i++){
    let con=""

    if(i<=5){

        for(let j=1;j<=i;j++){
            con+="*"+" "

        }
    }
    else{

        for(let j=1;j<=10-i+1;j++){
            con+="*"+" "

        } 
    } 
        console.log(con)

}

for(let i=1;i<=6;i++){

    let star=""
    let count=""

    for(let j=1;j<=6-i;j++){
        star+="*"+" "

    }


    for(let k=1;k<=i;k++){
        count+=0+" "

    }
    console.log(star+count)



}


for(let i=1;i<=5;i++){
    let star=""
    let spc=""

    for(let j=1;j<i;j++){
        spc+=" "+" "
    }

    for(let j=1;j<=6-i;j++){
        star+="*"+" "
    }

    console.log(spc+star)
}

for(let i=1;i<=6;i++){
    let spc=""
    let star=""

    for(let j=1;j<=6-i;j++){
        spc+=" "+" "
    }

    for(let j=1;j<i;j++){
        star+="*"+" "
    }
    console.log(spc+star)
}

console.log("--------------------------------------------")
for(let i=1;i<=7;i++){
    let spc=""
    let star=""

    if(i<=4){
        for(let j=1;j<=4-i;j++){
            spc+=" "+" "
        }

        for(let j=1;j<=i;j++){
            star+="*"+" "

        }
        console.log(spc+star)

    }
    else{
        for(let j=1;j<=i-4;j++){
            spc+=" "+" "
        }

        for(let j=1;j<=7-i+1;j++){
            star+="*"+" "

        } 
        console.log(spc+star)

    } 

}



