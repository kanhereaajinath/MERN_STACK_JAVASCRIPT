//Creating classes in JavaScript using constructor and inheritance.
class A 
{
    constructor ()
    {
        console.log("I like play cricket")
    }
}
class B extends A
{
    constructor()
    
    {
        super()
        console.log("I like read a book")
    }
}
let obj=new B()