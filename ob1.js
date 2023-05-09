class Area{
    constructor(radis)
    {
        this.radis=radis
    }
    calArea()
    {
        let a;
        a=3.14*this.radis*this.radis;
        console.log("the area of circle is "+a)
    }
}
let ob1=new Area(3)
ob1.calArea()
