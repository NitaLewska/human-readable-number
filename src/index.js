module.exports = function toReadable (number) {
    if (number == 0) {
        return 'zero'
    }
    let text = ""
    const numbers1to20 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen', 'nineteen', 'twenty']
    const numbers20to90 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    if (number>99) {
      text = ''+numbers1to20[Math.floor(number/100)] + ' hundred '
    }
    if (number%100>20) {
        text = text + numbers20to90[Math.floor(number%100/10)-2] + ' ' + numbers1to20[number%10]
    } else {
        text = text + numbers1to20[number%100]
    }
    return text.trim()
}
