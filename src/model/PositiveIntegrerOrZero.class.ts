

export class PositiveIntegerOrZero 
{
    value: number; 
 constructor  (val: number) 
 { 
     if (val < 0)
     throw "El numero debe ser entero  positivo"
     this.value=val;



 }
toString () : string 
{

    return this.value.toString(); 

}

}





/*
PositiveIntegerOrZero
    PositiveIntegerOrZero(ushort | int) //constructor, throw Exception if int < 0
    Value : ushort | int //property
    ToString() : String => "9999" (value) // method
    */