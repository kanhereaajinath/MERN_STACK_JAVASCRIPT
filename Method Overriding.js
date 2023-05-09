class A 
{
    show()
    {
        console.log("Hello Vilhadi")
    }
}
class B extends A
{
    show()
    {
        console.log("in class B")
    }
}
let ob=new B
ob.show()