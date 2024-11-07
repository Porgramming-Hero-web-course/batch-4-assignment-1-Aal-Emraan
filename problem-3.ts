{
    const countWordOccurences = (sentence : string, word : string) : number | string => {
        // checking whether the sentence is empty
        if(sentence.length === 0) return 'Empty sentence.';

        let count = 0;
        const str = sentence.replace(/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g, '');
        const splittedArray = str.split(" ");
        splittedArray.map((el : string) => {
            if(el.toLowerCase() === word.toLowerCase()) count++;
        })

        return count;
    }

    console.log(countWordOccurences("TypeScript is great. I love TypeScript!", "typescript"));
}