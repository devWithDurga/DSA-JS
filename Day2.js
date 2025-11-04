// Today i learned about Loops inside loops and how its helps for solving patterns.

///Problem - 1
// ****
// ****
// ****
// ****

for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    row = row + " *";
  }
  console.log(row);
}

//Problem - 2
//****
//***
//**
//*

for (let i = 0; i < 4; i++) {
  let row = "";
  for (j = 0; j < i + 1; j++) {
    row = row + " *";
  }
  console.log(row);
}

//Problem - 3
// 1
// 12
// 123
// 1234
// 12345

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j < i + 1; j++) {
    row = row + j;
  }
  console.log(row);
}

//Problem - 4
// 1
// 22
// 333
// 4444
// 55555

for (let i = 0; i < 5; i++) {
  let row = ""
  for (let j = 0; j < i + 1; j++) {
    row = row + (i+1)
  }
  console.log(row)
}

//Problem - 5
// 12345
// 1234
// 123
// 12
// 1

for (let i = 5 ; i > 0 ; i--){
    let row  = ''
    for (j = 0 ; j < i ; j ++ ){
    row  = row + (j+1)

    }
    console.log(row)
}

//Problem - 6
//     *
//    **
//   *** 
//  ****
// *****  

let n= 5
for (let i =0 ; i<n ; i++){
    let row  = ""
    //adding empty spaces 
    for (let j = 0 ; j<n - (i+1) ; j++){
       row  = row + ' '
    }
    //adding stars
    for (let k = 0; k<i+1; k++){
        row = row +"*"
    }
    console.log(row)
}

//Problem - 7

// 1
// 10
// 101
// 1010
// 10101
// 1010101

for (let i= 0; i<n ; i++){
    let row = ''
    let toggle = 1
    for (j=0;j<i+1;j++){
        row = row + toggle
        if(toggle == 1){
            toggle = 0
        }else{
            toggle=1
        }
    } 
    console.log(row)
}


//Problem - 8

// 1
// 01
// 010
// 1010
// 10101

let toggle1 = 1
for (let i= 0; i<n ; i++){
    let row = ''
    for (j=0;j<i+1;j++){
        row = row + toggle1
        if(toggle1 == 1){
            toggle1 = 0
        }else{
            toggle1=1
        }
    } 
    console.log(row)
}