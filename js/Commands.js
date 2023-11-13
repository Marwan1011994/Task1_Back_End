//////////////////////////////////////////////////////////////

// Start Task 2

const fs = require("fs");

const loadData = ()=>{
    try{
        const datajson = fs.readFileSync("data.json").toString();
        return JSON.parse(datajson);
    }catch{
        return [];
    }
}
const saveAllData = (Data)=>{
    const saveData = JSON.stringify(Data)
     fs.writeFileSync("data.json",saveData)
}

//////////////////////////////////////////////////////////////

const addperson = (fname,lname,age,city)=>{
    const file = loadData();
    file.push({
        fname,lname,age,city
    })
    saveAllData(file)
}

// END TASK 1





//////////////////////////////////////////////////////////////

// Start Task 2

const loadData2 = ()=>{
    try{
        const datajson = fs.readFileSync("data2.json").toString();
        return JSON.parse(datajson);
    }catch{
        return [];
    }
}
const saveAllData2 = (Data)=>{
    const saveData = JSON.stringify(Data)
     fs.writeFileSync("data2.json",saveData)
}

const addperson2 = (id,fname,lname,age,city)=>{
    const file = loadData2();
    const dubleID = file.filter((ele)=>{
        return ele.id === id
    })
    if(dubleID == ""){
        file.push({
            id,fname,lname,age,city
        })
    }else{
        console.log("ERROR DOUBLICATED ID")
    }
    saveAllData2(file)
}
const deleteid4to6 = ()=>{
    const file = loadData2();
    const newfile = file.filter((ele)=>{
        return  ele.id < 4 || ele.id > 6
    })
    saveAllData2(newfile)
}
const list = ()=>{
    const file = loadData2();
    file.forEach((ele)=>{
        console.log("fname:"+ ele.fname,"lname:"+ele.lname,"city:"+ele.city)
    })
}

const read5th = ()=>{
    const file = loadData2();
    const read5person = file.find((ele)=>{
        return ele.id == 5
    })
    console.log(read5person)
}

// END TASK 2

//////////////////////////////////////////////////////////////



module.exports = {
    addperson,
    addperson2,
    list,
    read5th,
    deleteid4to6
}