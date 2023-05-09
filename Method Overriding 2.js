class Aninmal
{
    talk()
    {
        console.log("Animal is sound")
    }
}
class Dog extends Aninmal
{
    talk()
    {
        console.log("bow bow.....")
    }
}
class Duck extends Aninmal
{
    talk()
    {
        console.log("quack quack....")
    }
}
let obj=new Dog()
obj.talk()
let ob =new Duck()
ob.talk()