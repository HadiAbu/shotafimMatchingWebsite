

let callFunc1 = () => {
    let arr = [[1],[2,3],[3],[4]];

    console.log("ES6 function");

    let evenArr = arr.filter( (x) => {
        if(x%2==0)
            return x;
    });

    let sumArr = arr.reduce( (accumlate, current) =>{

        return accumlate.concat( current );

    }, []);

    console.log(sumArr);
}

callFunc1();





let addFunc = (x) =>{

        let scope1 = 0;

        return () =>{
            return this.scope1+x;
        }
}





























