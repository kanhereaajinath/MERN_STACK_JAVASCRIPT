// Dynamic class creation and function passing to a class in JavaScript
let stud=class{
    sayhello()
    {
        console.log("Hello world")
    }
}
let ob=new stud()
ob.sayhello()
//Function passing to the class

function show(stude)
{
    let ob=new stude()
ob.sayhello()
}
let stude=class{
    sayhello()
    {
        console.log("hello world")
    }
}
show(stude)