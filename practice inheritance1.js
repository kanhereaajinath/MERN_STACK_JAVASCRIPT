// "Inheritance and Method Overriding in JavaScript Classes"
 class A 
{
    constructor()
    {
        this.i=100;

    }
}
class B extends A
{
    constructor ()
    {
        super()
        this.j=200

    }
    add()
    {
        console.log(this.i+this.j)
    }
}
let obj=new B()
obj.add()