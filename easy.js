class Easy {

    amIPerfect(num) {
        let factors = 0, i = 1
        while (true) {
            // If i is the factor of the number add it
            if (num%i == 0) {
                factors += i
            }
            // If two times of i is greater than the number, then the
            // numbers above i will not be the factors so break the loop
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
            // If the numbers a divisible of 2 reduce the number by 2
            if (num%2 === 0) {
                num = parseInt(num/2)
            }
            // Else if the number is odd multiply by 3 and add 1 to the number
            else if (num%2 !== 0) {
                num = (num*3) + 1
            }
            trails++
        }
        return trails
    }

}

module.exports = Easy