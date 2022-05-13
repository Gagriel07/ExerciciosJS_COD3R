let browse = (array = []) => {
    let range = 0
    let notRange = 0

    for(let i = 0; i < array.length; i++) {
        if (array[i] >= 10 && array[i] <= 20) {
            range++
        } else {
            notRange++
        }
    }

    console.log(`Numbers in range: ${range}`)
    console.log(`Numbers out of range: ${notRange}`)
}

browse([1, 3, 10, 11, 3])