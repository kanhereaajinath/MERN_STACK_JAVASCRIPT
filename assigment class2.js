// Creating a class in JavaScript to create student objects and call a method to display a greeting message.
class student{
    constructor(name)
    {
        this.name=name

    }
    sayhello()
    {
        console.log("HELLO"+this.name)

    }
}
let ob=new student("Aajinath")
ob.sayhello()

