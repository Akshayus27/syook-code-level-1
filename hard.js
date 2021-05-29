class Hard {

    catchTheFish(total, k, l, m, n) {
        let fishes = 0
        for( let i = 1; i <= total; i++) {
            if (i%k === 0 || i%l === 0 || i%m === 0 || i%n === 0) {
                fishes++
            }
        }
        return fishes
    }

}

module.exports = Hard