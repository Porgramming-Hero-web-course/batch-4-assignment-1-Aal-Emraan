{
    const sumArray = (numbers: number[]) : number | string => {
        let total = 0;
        if(numbers.length === 0) return 'This array is empty.'
        numbers.map((num : number) => total += num)
        return total;
    }
}