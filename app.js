module.exports = {
  plusMinusCheck: function (num) {
    var test = num.toString()
    if (test.length > 2) {
      return '+'
    } else if (test[1] >= 8) {
      return '+'
    } else if (test[1] == 0) {
      return '-'
    } else return ''
  },

  letterGrader: function (num) {
    if (num >= 90) {
      return 'A' + this.plusMinusCheck(num)
    } else if (num >= 80) {
      return 'B' + this.plusMinusCheck(num)
    } else if (num >= 70) {
      return 'C' + this.plusMinusCheck(num)
    } else if (num >= 60) {
      return 'D' + this.plusMinusCheck(num)
    } else if (num <= 59) {
      return 'F' + this.plusMinusCheck(num)
    }
  },

  average: function (arr) {
    var result = 0
    var length = arr.length
    for (var i = 0; i < length; i++) {
      result += arr[i]
    }
    result = result / length
    return result
  },

  median: function (arr) {
    var result = 0
    var index = 0
    var firstMedian = 0
    var secondMedian = 0
    var length = arr.length

    if (length % 2 == 0) {
      index = (length / 2) - 1
      firstMedian = arr[index]
      secondMedian = arr.reverse()[index]
      result = (firstMedian + secondMedian) / 2
      return result
    } else {
      index = ((length / 2) + 0.5) - 1
      result = arr[index]
      return result
    }

  },
  mode: function (arr) {
    var numCount = {}
    var mode = []
    var modeCount = 0
    var greatestMode = 0
    for (var i = 0; i < arr.length; i++) {
      for (var r = 0; r < arr.length; r++) {
        if (arr[i] === arr[r]) {
          modeCount++
        }
      }
      numCount[arr[i]] = modeCount
      if (modeCount >= greatestMode) {
        greatestMode = modeCount
      }
      modeCount = 0
    }
    if (greatestMode === 1) {
      return 'no mode'
    }
    for (var prop in numCount) {
      if (numCount[prop] === greatestMode) {
        mode.push(prop)
      }

    }

    return mode.join(' ')
  }

}

