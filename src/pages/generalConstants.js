export const validKey = (keyCode) => {
    return keyIsNumber(keyCode) || 
    keyIsUpperKey(keyCode) || 
    keyIsLowerKey(keyCode) || 
    keyIsSpecialSymbol(keyCode) ||
    keyIsAvailableSymbol(keyCode)
  }

  const keyIsNumber = (keyCode) => {
    return keyCode >= 48 && keyCode <= 57
  }

  const keyIsUpperKey = (keyCode) => {
    return keyCode >= 65 && keyCode <= 90
  }

  const keyIsLowerKey = (keyCode) => {
    return keyCode >= 97 && keyCode <= 122
  }

  const keyIsSpecialSymbol = (keyCode) => {
    return keyCode >= 186 && keyCode <= 192
  }

  const keyIsAvailableSymbol = (keyCode) => {
    return [ 32, 219, 220, 221, 222].includes(keyCode)
}

export const rightShiftSymbol = ['°', '1', '2', '3', '4', '5', 'V', 'W', 'E', 'R', 'T', 'Z', 'A', 'S', 'D', 'F', 'G', 'H', 'Y', 'X', 'C', 'V', 'B', 'N']
export const lefttShiftSymbol = ['6', '7', '8', '9', '0', '%', 'ˇ', 'U', 'I', 'O', 'P', '/', '(', "'", 'J', 'K', 'L', '"', '!', 'M', '?', ':', '_']