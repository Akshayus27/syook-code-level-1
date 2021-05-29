class Medium {

    hideThePin(number) {
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
                if(bitNumber === 16) {
                    encodedString = bits[bitNumber](encodedString)
                }
                else {
                    encodedString.push(bits[bitNumber])
                }
            }
            ++shift
            bitNumber = (1 << shift)
        }
        return encodedString
    }

}

module.exports = Medium