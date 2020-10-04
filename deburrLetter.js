/** Used to map Latin Unicode letters to basic Latin letters. */
const deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's',
  // Vietnamese-Latin Extended-B block.
  '\u01a0': 'O', '\u01a1': 'o',
  '\u01af': 'U', '\u01b0': 'u',
  // Vietnamese-Latin Extended Additional
  '\u1ea0': 'A', '\u1ea1': 'a', '\u1ea2': 'A', '\u1ea3': 'a',
  '\u1ea4': 'A', '\u1ea5': 'a', '\u1ea6': 'A', '\u1ea7': 'a',
  '\u1ea8': 'A', '\u1ea9': 'a', '\u1eaa': 'A', '\u1eab': 'a',
  '\u1eac': 'A', '\u1ead': 'a', '\u1eae': 'A', '\u1eaf': 'a',
  '\u1eb0': 'A', '\u1eb1': 'a', '\u1eb2': 'A', '\u1eb3': 'a',
  '\u1eb4': 'A', '\u1eb5': 'a', '\u1eb6': 'A', '\u1eb7': 'a',
  '\u1eb8': 'E', '\u1eb9': 'e', '\u1eba': 'E', '\u1ebb': 'e',
  '\u1ebc': 'E', '\u1ebd': 'e', '\u1ebe': 'E', '\u1ebf': 'e',
  '\u1ec0': 'E', '\u1ec1': 'e', '\u1ec2': 'E', '\u1ec3': 'e',
  '\u1ec4': 'E', '\u1ec5': 'e', '\u1ec6': 'E', '\u1ec7': 'e',
  '\u1ec8': 'I', '\u1ec9': 'i', '\u1eca': 'I', '\u1ecb': 'i',
  '\u1ecc': 'O', '\u1ecd': 'o', '\u1ece': 'O', '\u1ecf': 'o',
  '\u1ed0': 'O', '\u1ed1': 'o', '\u1ed2': 'O', '\u1ed3': 'o',
  '\u1ed4': 'O', '\u1ed5': 'o', '\u1ed6': 'O', '\u1ed7': 'o',
  '\u1ed8': 'O', '\u1ed9': 'o', '\u1eda': 'O', '\u1edb': 'o',
  '\u1edc': 'O', '\u1edd': 'o', '\u1ede': 'O', '\u1edf': 'o',
  '\u1ee0': 'O', '\u1ee1': 'o', '\u1ee2': 'O', '\u1ee3': 'o',
  '\u1ee4': 'U', '\u1ee5': 'u', '\u1ee6': 'U', '\u1ee7': 'u',
  '\u1ee8': 'U', '\u1ee9': 'u', '\u1eea': 'U', '\u1eeb': 'u',
  '\u1eec': 'U', '\u1eed': 'u', '\u1eee': 'U', '\u1eef': 'u',
  '\u1ef0': 'U', '\u1ef1': 'u',
  '\u1ef2': 'Y', '\u1ef3': 'y', '\u1ef4': 'Y', '\u1ef5': 'y',
  '\u1ef6': 'Y', '\u1ef7': 'y', '\u1ef8': 'Y', '\u1ef9': 'y'
}

/**
 * Used by `deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
const deburrLetter = key => deburredLetters[key]

module.exports = deburrLetter