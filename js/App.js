                  // Task 1 

const DataFile = require("./Commands")

const yargs = require("yargs")

yargs.command({
    command:"add",
    describe:"add person",
    builder:{
        fname:{
            describe:"first name for person",
            demandOption:true,
            type:"string"
        },
        lname:{
            describe:"last name for person",
            demandOption:true,
            type:"string"
        },
        age:{
            describe:"age for person",
            demandOption:true,
            type:"string",
        },
        city:{
            describe:"city for person",
            demandOption:true,
            type:"string"
        },
    },
    handler:(x)=>{
        DataFile.addperson(x.fname,x.lname,x.age,x.city)
    }
    
})


//////////////////////////////////////////////////////////////////////////////////////////


                                                  ///            Task 1     "Another Solution"       /////
const fs = require("fs")

// 1) create object person ( fname = ahmed , lname = hossam , age = 20 , city = alex )

const person_Obj = {
    fname:"Ahmed",
    lname:"hossam",
    age: 20,
    city : "Alex"
}
console.log(person_Obj)

// 2) change obj to Json 

person_Json = JSON.stringify(person_Obj)
console.log(person_Json)

// 3) store in file

fs.writeFileSync("dataperson.json",person_Json)

// 4) read file (json)

const readFile = fs.readFileSync("dataperson.json").toString()
console.log(readFile)

// 5) Convert to obj 

const convert_Obj = JSON.parse(readFile)
console.log(convert_Obj)

// 6) Update data to ( adel ahmed , 40 , cairo) 

const objtoArry = [];
objtoArry.push(
    convert_Obj,{
        fname:"Adel",
        lname:"Ahmed",
        age: 40,
        city : "Cairo"
})
console.log(objtoArry)

// 7) convert obj to Json 

const objtojson = JSON.stringify(objtoArry)
console.log(objtojson)

// 8) store in file (writeFileSync)

fs.writeFileSync("dataperson.json",objtojson)

//////////////////////////////////////////////////////////////////////////


                                        ///            Task 2      /////


yargs.command({
    command:"add2",
    describe:"add person",
    builder:{
        id:{
            describe:"id for person",
            demandOption:true,
            type:"string"
        },
        fname:{
            describe:"first name for person",
            demandOption:true,
            type:"string"
        },
        lname:{
            describe:"last name for person",
            demandOption:true,
            type:"string"
        },
        age:{
            describe:"age for person",
            demandOption:true,
            type:"string",
        },
        city:{
            describe:"city for person",
            demandOption:true,
            type:"string"
        },
    },
    handler:(x)=>{
        DataFile.addperson2(x.id,x.fname,x.lname,x.age,x.city)
    }
    
})
yargs.command({
    command:"delete",
    describe:"for delete id from 4 to 6",
    handler:()=>{
        DataFile.deleteid4to6();
    }
})
yargs.command({
    command:"readlist",
    describe:"for read fname,lname and city of file",
    handler:()=>{
        DataFile.list();
    }
})
yargs.command({
    command:"read5th",
    describe:"for read all data for only the 5th person . ",
    handler:()=>{
        DataFile.read5th();
    }
})


yargs.parse()
