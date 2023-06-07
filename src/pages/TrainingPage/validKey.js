export const validKey = (keyCode) => {
    return keyIsNumber(keyCode) || 
    keyIsUpperKey(keyCode) || 
    keyIsLowerKer(keyCode) || 
    keyIsSpecialSymbole(keyCode) ||
    keyIsAvailableSymbole(keyCode)
  }

  const keyIsNumber = (keyCode) => {
    return keyCode >= 48 && keyCode <= 57
  }

  const keyIsUpperKey = (keyCode) => {
    return keyCode >= 65 && keyCode <= 90
  }

  const keyIsLowerKer = (keyCode) => {
    return keyCode >= 97 && keyCode <= 122
  }

  const keyIsSpecialSymbole = (keyCode) => {
    return keyCode >= 186 && keyCode <= 192
  }

  const keyIsAvailableSymbole = (keyCode) => {
    return [13, 32, 219, 220, 221, 222].includes(keyCode)
  }