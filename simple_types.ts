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

