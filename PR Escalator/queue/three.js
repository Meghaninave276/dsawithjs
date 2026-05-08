function firstNonRepeating(stream) {
    let queue = [];
    let count = {};
    let result = "";

    for (let char of stream) {

        count[char] = (count[char] || 0) + 1;
        queue.push(char);

        while (queue.length && count[queue[0]] > 1) {
            queue.shift();
        }

        result += queue.length ? queue[0] : "#";
    }

    return result;
}


console.log(firstNonRepeating("aabc"));