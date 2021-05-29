class Easy {

    amIPerfect(num) {
        let factors = 0, i = 1
        while (true) {
            if (num%i == 0) {
                factors += i
            }
            else if (i*2 > num) {
                break
            }
            i++
        }
        if (factors === num) {
            return "Perfect"
        }
        else if (factors > num) {
            return "Abundant"
        }
        else {
            return "Deficient"
        }
    }

    trailsToOne(num) {
        let trails = 0
        while (num > 1) {
            if (num%2 === 0) {
                num = parseInt(num/2)
            }
            else if (num%2 !== 0) {
                num = (num*3) + 1
            }
            trails++
        }
        return trails
    }

}

module.exports = Easy