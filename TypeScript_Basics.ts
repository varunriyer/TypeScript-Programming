{
    let firstName: string = "Dylan";
    console.log(firstName);

    let secondName = "James";
    console.log(secondName);
}

{
    // Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
    const json = JSON.parse("55");
    // Most expect json to be an object, but it can be a string or a number like this example
    console.log(typeof json);
}

{
    // Using any to disable type checking 

    //Example without any 
    let u = true;
    // u = "String" --> This will give error without any 
    // console.log(Math.round(u)); --> This will also give error 

    //Using any to disable type checking

    let v: any = true;
    v = "string";
    console.log(v); //no error
    console.log(Math.round(v)); //returns NaN (No error)
}

{
    //Working with TypeScript Arrays

    let names: string[] = [];
    names.push("a"); // No error 
    console.log(names);

    // names.push(4); --> This gives an error as you can only push type string
}

{

    //Using readonly to prevent arrays from being changed
    let names: readonly string[] = ["Joseph"];
    // names.push("Dillon"); --> This will gove an error as you cannot modify readonly array
    console.log(names);
}
{
    //Type Inference by TypeScript for arrays if it has values
    let numbers = [1, 2, 3]; //TS can infer that this is type - number[]
    numbers.push(4); // Hence this doesn't give any error
    // numbers.push("5"); --> This will give an error as it is not of type number

    console.log(numbers);

    let head: number = numbers[0];
    let tail = numbers[numbers.length - 1];
    console.log(head, tail);

}

{
    //Working with Tuples in TS --> Tuples let each element in the array to be a known type value
    let myTuple: [number, boolean, string];
    myTuple = [5, false, "Yooo"];
    console.log(myTuple);
    // myTuple = [true, "Noooo", 7]; --> This gives error as order is changed
    // myTuple = [9, true, "Soooo", 3]; --> This gives error as tuple can only accept 3 elements
}
{
    //Using Tuples without using Readonly
    let myTuple: [number, boolean, string];
    myTuple = [5, true, "hello"];
    myTuple.push("I can add something?"); //Tuples are usually strongly defined, so it is better to keep it readonly
    console.log(myTuple);
}
{
    //Using readonly with tuples to avoid errors
    let myTuple: readonly [number, boolean, string] = [5, false, "Check123"];
    console.log(myTuple);
    // myTuple.push("Don't even think about it"); --> This gives an error as it is readonly 
}
{
    //Using Named Tuples to provide more context for what our index values represent
    let graph: [x: number, y: number] = [55.3, 22.2];
    console.log(graph);
    let [x, y] = graph;
    console.log(`x + y is = ${x + y}`);

}

{
    //TypeScript Object Types
    let car: { type: string, model: string, year: number } = {
        type: "Toyota",
        model: "Corrola",
        year: 2009
    };

    console.log(car);
    console.log(car.model);
}
{
    //TS can also infer the types of properties based on their values
    let car = {
        type: "Toyota",
    };
    car.type = "Honda"; // TS accepts as it is a string
    // car.type = 77; --> This gives an error as it is not string
}
{
    //Using objects without an optional properties 
    /* let car: { type: string, mileage: number } = {
        type: "Toyota"
    };                --> This gives an error as we have to define mileage 
    car.mileage = 2000; */

}
{
    //Using objects with optional properties
    let car: { type: string, mileage?: number } = { //--> Here using ?. we can make the property optional 
        type: "Toyota",
    };
    car.mileage = 2000;
    console.log(car);
}
{
    //Using Index Signatures 
    let obj: { [index: string]: number } = {};
    obj.Jack = 25;
    // obj.Mark = "Fifty"; --> This gives an error as it is needs to be a number
    console.log(obj);
}
{
    // Enums --> Special class that represents a group of consonants
    // By default enums will initialize the first value to 0 and add 1 to each additional value 
    enum Directions {
        North,
        East,
        South,
        West
    }
    let currentDirection = Directions.North
    console.log(currentDirection); // 0
    console.log(Directions.South); // 2
}

{
    // You can also initialize Numeric Enums to set the value of the first numeric enum and it will auto increment from there 
    enum Directions {
        North = 1,
        East,
        South,
        West,
    };
    let currentDirection = Directions.North;
    console.log(currentDirection); // 1
    console.log(Directions.West); // 4
}
{
    // You can also full initialize Numeric Enums to set values for each enum
    enum StatusCodes {
        NotFound = 404,
        Success = 200,
        Accepted = 202,
        BadRequest = 400,
    }
    let BadRequest_ID = StatusCodes.BadRequest;
    console.log(BadRequest_ID); // 400
    console.log(StatusCodes.Accepted); // 202
}
{
    // Using String Enums --> More common 
    enum Directions {
        North = "North",
        East = "East",
        South = "South",
        West = "West"

    }
    let currentDirection = Directions.East;
    console.log(currentDirection);
    console.log(Directions.West);

}
{
    // Testing Mixing enums
    enum Directions {
        North = "North",
        East = "East",
        South = "South",
        West = 3,
        SouthWest,
        SouthEast = "SW",
        NorthWest = 5,
        NorthEast

    }
    let currentDirection = Directions.East;
    console.log(currentDirection);
    console.log(Directions.West); // 3 
    console.log(Directions.SouthWest); // 4
    console.log(Directions.NorthEast); // 6
}
{
    // Using type alias 
    type CarYear = number;
    type CarType = string;
    type CarModel = string;
    type Car = {
        year: CarYear,
        type: CarType,
        model: CarModel,
    };
    let CarYear: CarYear = 2001;
    let CarType: CarType = "Toyota";
    let CarModel = "Corolla";

    let car: Car = {
        year: CarYear,
        type: CarType,
        model: CarModel,
    };
    console.log(car);
    console.log(car.model);
}
{
    //Interfaces --> Similar to aliases but only work with objects 
    interface Rectangle {
        height: number,
        width: number,
    }
    let rectangle: Rectangle = {
        height: 20,
        width: 10,
    };
    console.log(rectangle);
}
{
    // You can also extend Interfaces 
    interface Rectangle {
        height: number,
        width: number,
    };
    interface ColouredRectangle extends Rectangle {
        colour: string,
    };
    let myRectangle: ColouredRectangle = {
        height: 30,
        width: 15,
        colour: "Blue",
    };

    console.log(myRectangle);
}

{
    //Using Union '|' in TS --> to store value which can have more than one type 
    function printStatusCode(code: string | number) {
        console.log(`My status code is ${code}`);
    }
    printStatusCode(404);
    printStatusCode("404"); // Both string and number is accepted 

}

// Remember that when you use Union it can cause errors if you use properties specific only to one type
// For example, if you use string | number , if you try to use .toUpperCase() it will give an error
// Bcoz it is not a function which is supported by number and is only supported by string, resulting in an error

{
    // In TS, we can specify the type of value returned by the function 
    function getTime(): number {
        return new Date().getDay(); // gets the day of the week
    }
    console.log(getTime());
}

{
    function myAge(): number {
        return 22;
        // return "twenty two"; --> This would give an error as only number is accepted
    }
    console.log(myAge());
}