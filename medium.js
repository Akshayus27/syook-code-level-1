class Medium {

    hideThePin(number) {
        // Mapping the binary bits to the respective string
        const bits = {
            1: "pop",
            2: "double rip",
            4: "hide your mints",
            8: "falls",
            16: (array) => {
                let low = 0, high = array.length-1
                while (low <= high) {
                    let temp = array[low]
                    array[low] = array[high]
                    array[high] = temp
                    low++;
                    high--;
                }
                return array
            }
        }
        let shift  = 0, bitNumber = (1 << shift)
        let encodedString = []
        while (bitNumber <= number) {
            if ((bitNumber&number) > 0) {
                // If the bit of the number is set to 16 reverse the array
                if(bitNumber === 16) {
                    encodedString = bits[bitNumber](encodedString)
                }
                else {
                    encodedString.push(bits[bitNumber])
                }
            }
            // Shift the number to the left by one bit to see
            // if the bit is set in the number
            ++shift
            bitNumber = (1 << shift)
        }
        return encodedString
    }

}

module.exports = Medium