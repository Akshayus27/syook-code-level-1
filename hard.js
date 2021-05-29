class Hard {

    catchTheFish(total, k, l, m, n) {
        let fishes = 0
        // Run the number from 1 to total of the fishes and see if it
        // is divisible by any given value and increase the count of fish
        for( let i = 1; i <= total; i++) {
            if (i%k === 0 || i%l === 0 || i%m === 0 || i%n === 0) {
                fishes++
            }
        }
        return fishes
    }

}

module.exports = Hard