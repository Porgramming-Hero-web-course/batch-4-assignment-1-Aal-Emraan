{
    const removeDuplicats = (numbers: number[]) : number[] | string => {

        // checking if the array is empty or has only one number
        if(numbers.length === 0) return "No number found.";
        if(numbers.length === 1) return numbers;

        // performing removing duplicate operation
        const newArray : number[] =[];
        newArray.push(numbers[0])

        numbers.map((num: number) => {
            let doesExist : boolean = false;
            newArray.map((n : number) => {
                if(num === n) doesExist = true
            })

            if(doesExist === false) newArray.push(num);
        })
        return newArray;
    }
}