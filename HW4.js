let array = []
let arr_ganjil =[]
let max_ganjil
let min_ganjil
let avg_ganjil = 0
let total_ganjil = 0

let arr_genap =[]
let max_genap
let min_genap
let avg_genap = 0
let total_genap = 0

for (let index = 0; index < 100; index++){
    array.push(Math.floor(Math.random()*50));

}
console.log(array) 

//Pemisahan ganjil-genap
for (let index = 0; index < array.length; index++){
    if(index % 2 == 0){
        arr_genap.push(array[index])
    }else{
        arr_ganjil.push(array[index])
    }
}
console.log("Array Ganjil")
console.log(arr_ganjil)
console.log("Array Genap")
console.log(arr_genap)

//Min-Max
for (let index = 0; index < 50; index++){
    min_ganjil = arr_ganjil[0]
    max_ganjil = arr_ganjil[0]
    min_genap = arr_genap[0]
    max_genap = arr_genap[0]

    //Min
    if(min_ganjil > arr_ganjil[index]){
        min_ganjil = arr_ganjil[index]
    }
    if(min_genap > arr_genap[index]){
        min_genap = arr_genap[index]
    }
    //Max
    if(max_ganjil < arr_ganjil[index]){
        max_ganjil = arr_ganjil[index]
    }
    if(max_genap < arr_genap[index]){
        max_genap = arr_genap[index]
    }

//Total
    total_ganjil += arr_ganjil[index]
    total_genap += arr_genap[index]

}
//Average
avg_ganjil = total_ganjil / arr_ganjil.length
avg_genap = total_genap / arr_genap.length

console.log("Output Data Ganjil")
console.log("Min" + min_ganjil)
console.log("Max" + max_ganjil)
console.log("Total" + total_ganjil)
console.log("Average" + avg_ganjil)

console.log("Output Data Genap")
console.log("Min" + min_genap)
console.log("Max" + max_genap)
console.log("Total" + total_genap)
console.log("Average" + avg_genap)

//---------------------

if(min_ganjil > min_genap){
    console.log("Min Ganjil lebih besar dari Min Genap")
}else if(min_ganjil < min_genap){
    console.log("Min Genap lebih besar dari Min Ganjil")
}else{
    console.log("Min Ganjil sama dengan Min Genap")
}

if(max_ganjil > max_genap){
    console.log("Max Ganjil lebih besar dari Max Genap")
}else if(max_ganjil < max_genap){
    console.log("Max Genap lebih besar dari Max Ganjil")
}else{
    console.log("Max Ganjil sama dengan Max Genap")
}

if(total_ganjil > total_genap){
    console.log("Total Ganjil lebih besar dari Total Genap")
}else if(total_ganjil < total_genap){
    console.log("Total Genap lebih besar dari Total Ganjil")
}else{
    console.log("Total Ganjil sama dengan Total Genap")
}

if(avg_ganjil > avg_genap){
    console.log("Average Ganjil lebih besar dari Average Genap")
}else if(avg_ganjil < avg_genap){
    console.log("Average Genap lebih besar dari Average Ganjil")
}else{
    console.log("Average Ganjil sama dengan Average Genap")
}