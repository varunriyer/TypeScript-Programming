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