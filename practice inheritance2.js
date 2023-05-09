// Creating classes with constructor and inheritance in JavaScript to perform addition operation.
 class A 
{
    constructor(x)
    {
        this.i=x;
    }
}
class B extends A
{
    constructor(x,y) {
        super(x)
        this.j=y
    }
    add()
    {
        console.log(this.i+this.j)
    }
}
let obj=new B(50,34)
obj.add()

