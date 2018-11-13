"use strict";

var modes = {
	plain: {}, // no changes
	fullwidth: {
		" ": "\u3000",
		"0": "\uff10",
		"1": "\uff11",
		"2": "\uff12",
		"3": "\uff13",
		"4": "\uff14",
		"5": "\uff15",
		"6": "\uff16",
		"7": "\uff17",
		"8": "\uff18",
		"9": "\uff19",
		"A": "\uff21",
		"B": "\uff22",
		"C": "\uff23",
		"D": "\uff24",
		"E": "\uff25",
		"F": "\uff26",
		"G": "\uff27",
		"H": "\uff28",
		"I": "\uff29",
		"J": "\uff2a",
		"K": "\uff2b",
		"L": "\uff2c",
		"M": "\uff2d",
		"N": "\uff2e",
		"O": "\uff2f",
		"P": "\uff30",
		"Q": "\uff31",
		"R": "\uff32",
		"S": "\uff33",
		"T": "\uff34",
		"U": "\uff35",
		"V": "\uff36",
		"W": "\uff37",
		"X": "\uff38",
		"Y": "\uff39",
		"Z": "\uff3a",
		"a": "\uff41",
		"b": "\uff42",
		"c": "\uff43",
		"d": "\uff44",
		"e": "\uff45",
		"f": "\uff46",
		"g": "\uff47",
		"h": "\uff48",
		"i": "\uff49",
		"j": "\uff4a",
		"k": "\uff4b",
		"l": "\uff4c",
		"m": "\uff4d",
		"n": "\uff4e",
		"o": "\uff4f",
		"p": "\uff50",
		"q": "\uff51",
		"r": "\uff52",
		"s": "\uff53",
		"t": "\uff54",
		"u": "\uff55",
		"v": "\uff56",
		"w": "\uff57",
		"x": "\uff58",
		"y": "\uff59",
		"z": "\uff5a",
		",": "\uff0c",
		".": "\uff0e",
		":": "\uff1a",
		";": "\uff1b",
		"!": "\uff01",
		"?": "\uff1f",
		"\"": "\uff02",
		"'": "\uff07",
		"`": "\uff40",
		"^": "\uff3e",
		"~": "\uff5e",
		"_": "\uff3f",
		"&": "\uff06",
		"@": "\uff20",
		"#": "\uff03",
		"%": "\uff05",
		"+": "\uff0b",
		"-": "\uff0d",
		"*": "\uff0a",
		"=": "\uff1d",
		"<": "\uff1c",
		">": "\uff1e",
		"(": "\uff08",
		")": "\uff09",
		"[": "\uff3b",
		"]": "\uff3d",
		"{": "\uff5b",
		"}": "\uff5d",
		"|": "\uff5c",
		"/": "\uff0f",
		"\\": "\uff3c",
		"$": "\uff04"
	},
	doublestruck: {
		"A": "𝔸",
		"B": "𝔹",
		"C": "ℂ",
		"D": "𝔻",
		"E": "𝔼",
		"F": "𝔽",
		"G": "𝔾",
		"H": "ℍ",
		"I": "𝕀",
		"J": "𝕁",
		"K": "𝕂",
		"L": "𝕃",
		"M": "𝕄",
		"N": "ℕ",
		"O": "𝕆",
		"P": "ℙ",
		"Q": "ℚ",
		"R": "ℝ",
		"S": "𝕊",
		"T": "𝕋",
		"U": "𝕌",
		"V": "𝕍",
		"W": "𝕎",
		"X": "𝕏",
		"Y": "𝕐",
		"Z": "ℤ",
		"a": "𝕒",
		"b": "𝕓",
		"c": "𝕔",
		"d": "𝕕",
		"e": "𝕖",
		"f": "𝕗",
		"g": "𝕘",
		"h": "𝕙",
		"i": "𝕚",
		"j": "𝕛",
		"k": "𝕜",
		"l": "𝕝",
		"m": "𝕞",
		"n": "𝕟",
		"o": "𝕠",
		"p": "𝕡",
		"q": "𝕢",
		"r": "𝕣",
		"s": "𝕤",
		"t": "𝕥",
		"u": "𝕦",
		"v": "𝕧",
		"w": "𝕨",
		"x": "𝕩",
		"y": "𝕪",
		"z": "𝕫",
		"0": "𝟘",
		"1": "𝟙",
		"2": "𝟚",
		"3": "𝟛",
		"4": "𝟜",
		"5": "𝟝",
		"6": "𝟞",
		"7": "𝟟",
		"8": "𝟠",
		"9": "𝟡"
	},
	fraktur: {
		"A": "𝔄",
		"B": "𝔅",
		"C": "ℭ",
		"D": "𝔇",
		"E": "𝔈",
		"F": "𝔉",
		"G": "𝔊",
		"H": "ℌ",
		"I": "ℑ",
		"J": "𝔍",
		"K": "𝔎",
		"L": "𝔏",
		"M": "𝔐",
		"N": "𝔑",
		"O": "𝔒",
		"P": "𝔓",
		"Q": "𝔔",
		"R": "ℜ",
		"S": "𝔖",
		"T": "𝔗",
		"U": "𝔘",
		"V": "𝔙",
		"W": "𝔚",
		"X": "𝔛",
		"Y": "𝔜",
		"Z": "ℨ",
		"a": "𝔞",
		"b": "𝔟",
		"c": "𝔠",
		"d": "𝔡",
		"e": "𝔢",
		"f": "𝔣",
		"g": "𝔤",
		"h": "𝔥",
		"i": "𝔦",
		"j": "𝔧",
		"k": "𝔨",
		"l": "𝔩",
		"m": "𝔪",
		"n": "𝔫",
		"o": "𝔬",
		"p": "𝔭",
		"q": "𝔮",
		"r": "𝔯",
		"s": "𝔰",
		"t": "𝔱",
		"u": "𝔲",
		"v": "𝔳",
		"w": "𝔴",
		"x": "𝔵",
		"y": "𝔶",
		"z": "𝔷"
	},
	frakturbold: {
		"A": "𝕬",
		"B": "𝕭",
		"C": "𝕮",
		"D": "𝕯",
		"E": "𝕰",
		"F": "𝕱",
		"G": "𝕲",
		"H": "𝕳",
		"I": "𝕴",
		"J": "𝕵",
		"K": "𝕶",
		"L": "𝕷",
		"M": "𝕸",
		"N": "𝕹",
		"O": "𝕺",
		"P": "𝕻",
		"Q": "𝕼",
		"R": "𝕽",
		"S": "𝕾",
		"T": "𝕿",
		"U": "𝖀",
		"V": "𝖁",
		"W": "𝖂",
		"X": "𝖃",
		"Y": "𝖄",
		"Z": "𝖅",
		"a": "𝖆",
		"b": "𝖇",
		"c": "𝖈",
		"d": "𝖉",
		"e": "𝖊",
		"f": "𝖋",
		"g": "𝖌",
		"h": "𝖍",
		"i": "𝖎",
		"j": "𝖏",
		"k": "𝖐",
		"l": "𝖑",
		"m": "𝖒",
		"n": "𝖓",
		"o": "𝖔",
		"p": "𝖕",
		"q": "𝖖",
		"r": "𝖗",
		"s": "𝖘",
		"t": "𝖙",
		"u": "𝖚",
		"v": "𝖛",
		"w": "𝖜",
		"x": "𝖝",
		"y": "𝖞",
		"z": "𝖟"
	},
	serifbold: {
		"A": "𝐀",
		"B": "𝐁",
		"C": "𝐂",
		"D": "𝐃",
		"E": "𝐄",
		"F": "𝐅",
		"G": "𝐆",
		"H": "𝐇",
		"I": "𝐈",
		"J": "𝐉",
		"K": "𝐊",
		"L": "𝐋",
		"M": "𝐌",
		"N": "𝐍",
		"O": "𝐎",
		"P": "𝐏",
		"Q": "𝐐",
		"R": "𝐑",
		"S": "𝐒",
		"T": "𝐓",
		"U": "𝐔",
		"V": "𝐕",
		"W": "𝐖",
		"X": "𝐗",
		"Y": "𝐘",
		"Z": "𝐙",
		"a": "𝐚",
		"b": "𝐛",
		"c": "𝐜",
		"d": "𝐝",
		"e": "𝐞",
		"f": "𝐟",
		"g": "𝐠",
		"h": "𝐡",
		"i": "𝐢",
		"j": "𝐣",
		"k": "𝐤",
		"l": "𝐥",
		"m": "𝐦",
		"n": "𝐧",
		"o": "𝐨",
		"p": "𝐩",
		"q": "𝐪",
		"r": "𝐫",
		"s": "𝐬",
		"t": "𝐭",
		"u": "𝐮",
		"v": "𝐯",
		"w": "𝐰",
		"x": "𝐱",
		"y": "𝐲",
		"z": "𝐳",
		"0": "𝟎",
		"1": "𝟏",
		"2": "𝟐",
		"3": "𝟑",
		"4": "𝟒",
		"5": "𝟓",
		"6": "𝟔",
		"7": "𝟕",
		"8": "𝟖",
		"9": "𝟗"
	},
	serifitalic: {
		"A": "𝐴",
		"B": "𝐵",
		"C": "𝐶",
		"D": "𝐷",
		"E": "𝐸",
		"F": "𝐹",
		"G": "𝐺",
		"H": "𝐻",
		"I": "𝐼",
		"J": "𝐽",
		"K": "𝐾",
		"L": "𝐿",
		"M": "𝑀",
		"N": "𝑁",
		"O": "𝑂",
		"P": "𝑃",
		"Q": "𝑄",
		"R": "𝑅",
		"S": "𝑆",
		"T": "𝑇",
		"U": "𝑈",
		"V": "𝑉",
		"W": "𝑊",
		"X": "𝑋",
		"Y": "𝑌",
		"Z": "𝑍",
		"a": "𝑎",
		"b": "𝑏",
		"c": "𝑐",
		"d": "𝑑",
		"e": "𝑒",
		"f": "𝑓",
		"g": "𝑔",
		"h": "ℎ",
		"i": "𝑖",
		"j": "𝑗",
		"k": "𝑘",
		"l": "𝑙",
		"m": "𝑚",
		"n": "𝑛",
		"o": "𝑜",
		"p": "𝑝",
		"q": "𝑞",
		"r": "𝑟",
		"s": "𝑠",
		"t": "𝑡",
		"u": "𝑢",
		"v": "𝑣",
		"w": "𝑤",
		"x": "𝑥",
		"y": "𝑦",
		"z": "𝑧"
	},
	serifbolditalic: {
		"A": "𝑨",
		"B": "𝑩",
		"C": "𝑪",
		"D": "𝑫",
		"E": "𝑬",
		"F": "𝑭",
		"G": "𝑮",
		"H": "𝑯",
		"I": "𝑰",
		"J": "𝑱",
		"K": "𝑲",
		"L": "𝑳",
		"M": "𝑴",
		"N": "𝑵",
		"O": "𝑶",
		"P": "𝑷",
		"Q": "𝑸",
		"R": "𝑹",
		"S": "𝑺",
		"T": "𝑻",
		"U": "𝑼",
		"V": "𝑽",
		"W": "𝑾",
		"X": "𝑿",
		"Y": "𝒀",
		"Z": "𝒁",
		"a": "𝒂",
		"b": "𝒃",
		"c": "𝒄",
		"d": "𝒅",
		"e": "𝒆",
		"f": "𝒇",
		"g": "𝒈",
		"h": "𝒉",
		"i": "𝒊",
		"j": "𝒋",
		"k": "𝒌",
		"l": "𝒍",
		"m": "𝒎",
		"n": "𝒏",
		"o": "𝒐",
		"p": "𝒑",
		"q": "𝒒",
		"r": "𝒓",
		"s": "𝒔",
		"t": "𝒕",
		"u": "𝒖",
		"v": "𝒗",
		"w": "𝒘",
		"x": "𝒙",
		"y": "𝒚",
		"z": "𝒛"
	},
	script: {
		"A": "𝒜",
		"B": "ℬ",
		"C": "𝒞",
		"D": "𝒟",
		"E": "ℰ",
		"F": "ℱ",
		"G": "𝒢",
		"H": "ℋ",
		"I": "ℐ",
		"J": "𝒥",
		"K": "𝒦",
		"L": "ℒ",
		"M": "ℳ",
		"N": "𝒩",
		"O": "𝒪",
		"P": "𝒫",
		"Q": "𝒬",
		"R": "ℛ",
		"S": "𝒮",
		"T": "𝒯",
		"U": "𝒰",
		"V": "𝒱",
		"W": "𝒲",
		"X": "𝒳",
		"Y": "𝒴",
		"Z": "𝒵",
		"a": "𝒶",
		"b": "𝒷",
		"c": "𝒸",
		"d": "𝒹",
		"e": "ℯ",
		"f": "𝒻",
		"g": "ℊ",
		"h": "𝒽",
		"i": "𝒾",
		"j": "𝒿",
		"k": "𝓀",
		"l": "𝓁",
		"m": "𝓂",
		"n": "𝓃",
		"o": "ℴ",
		"p": "𝓅",
		"q": "𝓆",
		"r": "𝓇",
		"s": "𝓈",
		"t": "𝓉",
		"u": "𝓊",
		"v": "𝓋",
		"w": "𝓌",
		"x": "𝓍",
		"y": "𝓎",
		"z": "𝓏"
	},
	scriptbold: {
		"A": "𝓐",
		"B": "𝓑",
		"C": "𝓒",
		"D": "𝓓",
		"E": "𝓔",
		"F": "𝓕",
		"G": "𝓖",
		"H": "𝓗",
		"I": "𝓘",
		"J": "𝓙",
		"K": "𝓚",
		"L": "𝓛",
		"M": "𝓜",
		"N": "𝓝",
		"O": "𝓞",
		"P": "𝓟",
		"Q": "𝓠",
		"R": "𝓡",
		"S": "𝓢",
		"T": "𝓣",
		"U": "𝓤",
		"V": "𝓥",
		"W": "𝓦",
		"X": "𝓧",
		"Y": "𝓨",
		"Z": "𝓩",
		"a": "𝓪",
		"b": "𝓫",
		"c": "𝓬",
		"d": "𝓭",
		"e": "𝓮",
		"f": "𝓯",
		"g": "𝓰",
		"h": "𝓱",
		"i": "𝓲",
		"j": "𝓳",
		"k": "𝓴",
		"l": "𝓵",
		"m": "𝓶",
		"n": "𝓷",
		"o": "𝓸",
		"p": "𝓹",
		"q": "𝓺",
		"r": "𝓻",
		"s": "𝓼",
		"t": "𝓽",
		"u": "𝓾",
		"v": "𝓿",
		"w": "𝔀",
		"x": "𝔁",
		"y": "𝔂",
		"z": "𝔃"
	},
	sans: {
		"A": "𝖠",
		"B": "𝖡",
		"C": "𝖢",
		"D": "𝖣",
		"E": "𝖤",
		"F": "𝖥",
		"G": "𝖦",
		"H": "𝖧",
		"I": "𝖨",
		"J": "𝖩",
		"K": "𝖪",
		"L": "𝖫",
		"M": "𝖬",
		"N": "𝖭",
		"O": "𝖮",
		"P": "𝖯",
		"Q": "𝖰",
		"R": "𝖱",
		"S": "𝖲",
		"T": "𝖳",
		"U": "𝖴",
		"V": "𝖵",
		"W": "𝖶",
		"X": "𝖷",
		"Y": "𝖸",
		"Z": "𝖹",
		"a": "𝖺",
		"b": "𝖻",
		"c": "𝖼",
		"d": "𝖽",
		"e": "𝖾",
		"f": "𝖿",
		"g": "𝗀",
		"h": "𝗁",
		"i": "𝗂",
		"j": "𝗃",
		"k": "𝗄",
		"l": "𝗅",
		"m": "𝗆",
		"n": "𝗇",
		"o": "𝗈",
		"p": "𝗉",
		"q": "𝗊",
		"r": "𝗋",
		"s": "𝗌",
		"t": "𝗍",
		"u": "𝗎",
		"v": "𝗏",
		"w": "𝗐",
		"x": "𝗑",
		"y": "𝗒",
		"z": "𝗓",
		"0": "𝟢",
		"1": "𝟣",
		"2": "𝟤",
		"3": "𝟥",
		"4": "𝟦",
		"5": "𝟧",
		"6": "𝟨",
		"7": "𝟩",
		"8": "𝟪",
		"9": "𝟫"
	},
	sansbold: {
		"A": "𝗔",
		"B": "𝗕",
		"C": "𝗖",
		"D": "𝗗",
		"E": "𝗘",
		"F": "𝗙",
		"G": "𝗚",
		"H": "𝗛",
		"I": "𝗜",
		"J": "𝗝",
		"K": "𝗞",
		"L": "𝗟",
		"M": "𝗠",
		"N": "𝗡",
		"O": "𝗢",
		"P": "𝗣",
		"Q": "𝗤",
		"R": "𝗥",
		"S": "𝗦",
		"T": "𝗧",
		"U": "𝗨",
		"V": "𝗩",
		"W": "𝗪",
		"X": "𝗫",
		"Y": "𝗬",
		"Z": "𝗭",
		"a": "𝗮",
		"b": "𝗯",
		"c": "𝗰",
		"d": "𝗱",
		"e": "𝗲",
		"f": "𝗳",
		"g": "𝗴",
		"h": "𝗵",
		"i": "𝗶",
		"j": "𝗷",
		"k": "𝗸",
		"l": "𝗹",
		"m": "𝗺",
		"n": "𝗻",
		"o": "𝗼",
		"p": "𝗽",
		"q": "𝗾",
		"r": "𝗿",
		"s": "𝘀",
		"t": "𝘁",
		"u": "𝘂",
		"v": "𝘃",
		"w": "𝘄",
		"x": "𝘅",
		"y": "𝘆",
		"z": "𝘇",
		"0": "𝟬",
		"1": "𝟭",
		"2": "𝟮",
		"3": "𝟯",
		"4": "𝟰",
		"5": "𝟱",
		"6": "𝟲",
		"7": "𝟳",
		"8": "𝟴",
		"9": "𝟵"
	},
	sansitalic: {
		"A": "𝘈",
		"B": "𝘉",
		"C": "𝘊",
		"D": "𝘋",
		"E": "𝘌",
		"F": "𝘍",
		"G": "𝘎",
		"H": "𝘏",
		"I": "𝘐",
		"J": "𝘑",
		"K": "𝘒",
		"L": "𝘓",
		"M": "𝘔",
		"N": "𝘕",
		"O": "𝘖",
		"P": "𝘗",
		"Q": "𝘘",
		"R": "𝘙",
		"S": "𝘚",
		"T": "𝘛",
		"U": "𝘜",
		"V": "𝘝",
		"W": "𝘞",
		"X": "𝘟",
		"Y": "𝘠",
		"Z": "𝘡",
		"a": "𝘢",
		"b": "𝘣",
		"c": "𝘤",
		"d": "𝘥",
		"e": "𝘦",
		"f": "𝘧",
		"g": "𝘨",
		"h": "𝘩",
		"i": "𝘪",
		"j": "𝘫",
		"k": "𝘬",
		"l": "𝘭",
		"m": "𝘮",
		"n": "𝘯",
		"o": "𝘰",
		"p": "𝘱",
		"q": "𝘲",
		"r": "𝘳",
		"s": "𝘴",
		"t": "𝘵",
		"u": "𝘶",
		"v": "𝘷",
		"w": "𝘸",
		"x": "𝘹",
		"y": "𝘺",
		"z": "𝘻"
	},
	sansbolditalic: {
		"A": "𝘼",
		"B": "𝘽",
		"C": "𝘾",
		"D": "𝘿",
		"E": "𝙀",
		"F": "𝙁",
		"G": "𝙂",
		"H": "𝙃",
		"I": "𝙄",
		"J": "𝙅",
		"K": "𝙆",
		"L": "𝙇",
		"M": "𝙈",
		"N": "𝙉",
		"O": "𝙊",
		"P": "𝙋",
		"Q": "𝙌",
		"R": "𝙍",
		"S": "𝙎",
		"T": "𝙏",
		"U": "𝙐",
		"V": "𝙑",
		"W": "𝙒",
		"X": "𝙓",
		"Y": "𝙔",
		"Z": "𝙕",
		"a": "𝙖",
		"b": "𝙗",
		"c": "𝙘",
		"d": "𝙙",
		"e": "𝙚",
		"f": "𝙛",
		"g": "𝙜",
		"h": "𝙝",
		"i": "𝙞",
		"j": "𝙟",
		"k": "𝙠",
		"l": "𝙡",
		"m": "𝙢",
		"n": "𝙣",
		"o": "𝙤",
		"p": "𝙥",
		"q": "𝙦",
		"r": "𝙧",
		"s": "𝙨",
		"t": "𝙩",
		"u": "𝙪",
		"v": "𝙫",
		"w": "𝙬",
		"x": "𝙭",
		"y": "𝙮",
		"z": "𝙯"
	},
	mono: {
		"A": "𝙰",
		"B": "𝙱",
		"C": "𝙲",
		"D": "𝙳",
		"E": "𝙴",
		"F": "𝙵",
		"G": "𝙶",
		"H": "𝙷",
		"I": "𝙸",
		"J": "𝙹",
		"K": "𝙺",
		"L": "𝙻",
		"M": "𝙼",
		"N": "𝙽",
		"O": "𝙾",
		"P": "𝙿",
		"Q": "𝚀",
		"R": "𝚁",
		"S": "𝚂",
		"T": "𝚃",
		"U": "𝚄",
		"V": "𝚅",
		"W": "𝚆",
		"X": "𝚇",
		"Y": "𝚈",
		"Z": "𝚉",
		"a": "𝚊",
		"b": "𝚋",
		"c": "𝚌",
		"d": "𝚍",
		"e": "𝚎",
		"f": "𝚏",
		"g": "𝚐",
		"h": "𝚑",
		"i": "𝚒",
		"j": "𝚓",
		"k": "𝚔",
		"l": "𝚕",
		"m": "𝚖",
		"n": "𝚗",
		"o": "𝚘",
		"p": "𝚙",
		"q": "𝚚",
		"r": "𝚛",
		"s": "𝚜",
		"t": "𝚝",
		"u": "𝚞",
		"v": "𝚟",
		"w": "𝚠",
		"x": "𝚡",
		"y": "𝚢",
		"z": "𝚣",
		"0": "𝟶",
		"1": "𝟷",
		"2": "𝟸",
		"3": "𝟹",
		"4": "𝟺",
		"5": "𝟻",
		"6": "𝟼",
		"7": "𝟽",
		"8": "𝟾",
		"9": "𝟿"
	}
};

var reverse;
function resetReverse() {
	reverse = {'\u200b': ''};
	Object.keys(modes).forEach(function(mode) {
		Object.keys(modes[mode]).forEach(function(c) {
			reverse[modes[mode][c]] = c;
		});
	});
}
resetReverse();

var params = Object.create(null);
if (location.search) {
	location.search.substring(1).split('&').map(function(p) {
		var s = p.split(/=/);
		params[s[0]] = s[1] || '';
	});
}

var currentMode = modes.plain;
var localData = JSON.parse(localStorage['mstdn-fonts'] || '{}');
if (localData.domain) {
	document.getElementById('emoji-domain').value = localData.domain;
}
if (!localData.emoji) {
	localData.emoji = {};
} else {
	Object.keys(localData.emoji).forEach(function(prefix) {
		addEmojiSet(prefix, localData.emoji[prefix]);
	});
}
document.getElementById('sidebar').addEventListener('change', function(e) {
	var mode = e.target.getAttribute('data-mode');
	if (mode) {
		currentMode = modes[mode];
	}
});
function emojiImage(e) {
	var img = document.createElement('img');
	img.src = e[0];
	img.title = ':' + e[1] + ':';
	img.alt = '\u200b:' + e[1] + ':';
	img.classList.add('emojione');
	img.setAttribute('draggable', 'false');
	return img;
}
document.getElementById('toot-contents').addEventListener('beforeinput', function(e) {
	if (!e.data) {
		return;
	}

	var hadCodes = false;
	var data = e.data;
	Object.keys(reverse).forEach(function(code) {
		if (data.indexOf(code) !== -1) {
			hadCodes = true;
			data = data.replace(new RegExp(code, 'gu'), reverse[code]);
		}
	});

	var chars = data.split('');
	if (!hadCodes && !chars.some(function(c) {
		return c === ':' || Object.hasOwnProperty.call(currentMode, c);
	})) {
		return;
	}
	e.returnValue = false;

	chars.forEach(function(c) {
		if (c === ':' && checkShortcode(hadCodes)) {
			return;
		}

		if (Object.hasOwnProperty.call(currentMode, c)) {
			insertChar(currentMode[c]);
		} else {
			document.execCommand('insertText', true, c);
		}
	});
});
function checkShortcode(fuzzy) {
	if (!localData.nf) {
		return false;
	}

	var shortcode = '';
	var sel = window.getSelection().getRangeAt(0);
	var sc = sel.startContainer;
	var so = sel.startOffset;
	while (sc.nodeType === Node.ELEMENT_NODE) {
		sc = sc.childNodes[so];
		if (!sc) {
			return false;
		}
		so = sc.length;
	}
	if (sc.nodeType === Node.TEXT_NODE) {
		shortcode = sc.nodeValue.substring(0, so).split('').map(function(c) {
			return reverse[c] || c;
		}).join('');
	} else {
		// ???
		debugger;
	}
	sc = sc.previousSibling;
	while (sc && !/[:\s]/.test(shortcode)) {
		if (sc.nodeType === Node.TEXT_NODE) {
			shortcode = sc.nodeValue.split('').map(function(c) {
				return reverse[c] || c;
			}).join('') + shortcode;
		} else if (sc.nodeType === Node.ELEMENT_NODE && sc.nodeName === 'IMG' && sc.alt.charCodeAt(0) === 0x200b && Object.hasOwnProperty.call(reverse, sc.alt.substring(1))) {
			shortcode = reverse[sc.alt.substring(1)] + shortcode;
			fuzzy = true;
		} else {
			debugger;
		}
		sc = sc.previousSibling;
	}

	var colon = shortcode.lastIndexOf(':');
	if (colon !== -1) {
		shortcode = shortcode.substring(colon + 1);
		if (fuzzy && !Object.hasOwnProperty.call(localData.nf, shortcode)) {
			shortcode = Object.keys(localData.nf).find(function(sc) {
				return sc.toLowerCase() === shortcode.toLowerCase();
			});
		}
		if (Object.hasOwnProperty.call(localData.nf, shortcode)) {
			sel = window.getSelection();
			for (var i = -1; i < shortcode.length; i++) {
				sel.modify('extend', 'backward', 'character');
			}
			sel.deleteFromDocument();
			localData.nf[shortcode].forEach(function(e) {
				insertChar(e);
			});
			return true;
		}
	}

	return false;
}
function insertChar(c) {
	if (!Array.isArray(c)) {
		document.execCommand('insertText', true, c);
		return;
	}

	var img = emojiImage(c);
	var sel = window.getSelection();
	sel.deleteFromDocument();
	sel.getRangeAt(0).insertNode(img);
	sel.getRangeAt(0).collapse(false);
}
var emojiXHR;
var btn = document.getElementById('load-emoji');
document.getElementById('emoji-domain').addEventListener('input', function(e) {
	btn.disabled = false;
});
btn.addEventListener('click', function(e) {
	e.preventDefault();
	btn.disabled = true;
	loadEmoji(document.getElementById('emoji-domain').value);
});
function loadEmoji(domain) {
	if (emojiXHR) {
		emojiXHR.abort();
	}
	emojiXHR = new XMLHttpRequest();
	emojiXHR.open('GET', 'https://cors-anywhere.herokuapp.com/' + encodeURIComponent(domain) + '/api/v1/custom_emojis');
	emojiXHR.crossOrigin = 'anonymous';
	emojiXHR.onerror = function() {
		btn.disabled = false;
	};
	emojiXHR.onload = function() {
		btn.disabled = false;
		var emojis = JSON.parse(emojiXHR.responseText).map(function(e) {
			return [e.url, e.shortcode];
		});
		emojiXHR = null;
		localData.domain = domain;
		localData.emoji = {};
		var blank = null;
		var prefixes = {};
		emojis.forEach(function(e) {
			if (e[1] === 'blank') {
				blank = e;
			}
			var prefix = e[1].substring(0, e[1].length - 1);
			prefixes[prefix] = (prefixes[prefix] || 0) + 1;
		});

		document.querySelectorAll('input[name="mode"][data-mode^="emojis_"]').forEach(function(r) {
			if (r.checked) {
				document.querySelector('input[name="mode"][data-mode="plain"]').click();
			}
			delete modes[r.getAttribute('data-mode')];
			r.parentNode.parentNode.removeChild(r.parentNode);
		});
		resetReverse();

		Object.keys(prefixes).forEach(function(prefix) {
			if (prefixes[prefix] >= 26) {
				var replacements = {};
				var lc = 0;
				var uc = 0;
				emojis.forEach(function(e) {
					if (e[1].startsWith(prefix)) {
						var ch = e[1].substring(prefix.length);
						switch (ch) {
						case 'st':
							ch = '.';
							break;
						case 'cm':
							ch = ',';
							break;
						case 'co':
							ch = ':';
							break;
						case 'sc':
							ch = ';';
							break;
						case 'dblquote':
							ch = '"';
							break;
						case 'ex':
						case 'exclamation':
							ch = '!';
							break;
						case 'qu':
						case 'question':
							ch = '?';
							break;
						case 'ap':
						case 'quote':
							ch = '\'';
							break;
						}
						if (ch.length === 1) {
							if (ch !== ch.toUpperCase()) {
								lc++;
							} else if (ch !== ch.toLowerCase()) {
								uc++;
							}
							replacements[ch] = e;
						} else {
							// debugger;
						}
					}
				});
				if (lc >= 26 && uc >= 26) {
					// we have both sets of letters
				} else if (lc >= 26) {
					for (var i = 0; i < 26; i++) {
						replacements[String.fromCharCode('A'.charCodeAt(0) + i)] = replacements[String.fromCharCode('a'.charCodeAt(0) + i)];
					}
				} else if (uc >= 26) {
					for (var i = 0; i < 26; i++) {
						replacements[String.fromCharCode('a'.charCodeAt(0) + i)] = replacements[String.fromCharCode('A'.charCodeAt(0) + i)];
					}
				} else {
					return; // not a letter prefix set
				}
				if (blank) {
					replacements[' '] = blank;
				} else {
					replacements[' '] = '\u3000';
				}

				localData.emoji[prefix] = replacements;
				addEmojiSet(prefix, replacements);
			}
		});
		localData.nf = {}; // non-font
		var multiOverride = {
			't1': [],
			'ral': [['ralsei', 'sei']],
			'brain1': [],
			'sonic_1': [['son', 'sonic_2', 'sonic_n'], ['sonic', 'sonic_2', 'sonic_3', 'sonic_4']],
		};
		emojis.forEach(function(e) {
			if (reverse[':' + e[1] + ':']) {
				return;
			}

			localData.nf[e[1]] = [e];
			if (Object.hasOwnProperty.call(multiOverride, e[1])) {
				multiOverride[e[1]].forEach(function(set) {
					set = set.slice(0);
					var name = set[0];
					set[0] = e[1];
					set = set.map(function(name) {
						return emojis.find(function(e) {
							return e[1] === name;
						});
					});
					if (!set.every(Boolean)) {
						return;
					}
					localData.nf[name] = set;
				});
				return;
			}

			if (/[^0-9]1$/.test(e[1])) {
				var set = [e];
				var name = e[1].substring(0, e[1].length - 1);
				for (var i = 2; ; i++) {
					var next = emojis.find(function(e) {
						return e[1] === name + i;
					});
					if (!next) {
						break;
					}
					set.push(next);
				}
				if (set.length > 1) {
					if (/_$/.test(name)) {
						name = name.substring(0, name.length - 1);
					}
					localData.nf[name] = set;
				}
			}
		});
		localStorage['mstdn-fonts'] = JSON.stringify(localData);
	};
	emojiXHR.send();
}
function addEmojiSet(prefix, replacements) {
	modes['emojis_' + prefix] = replacements;

	Object.keys(replacements).forEach(function(k) {
		reverse[':' + replacements[k][1] + ':'] = k;
	});
	var label = document.createElement('label');
	var radio = document.createElement('input');
	radio.type = 'radio';
	radio.name = 'mode';
	radio.setAttribute('data-mode', 'emojis_' + prefix);
	label.appendChild(radio);
	label.appendChild(document.createTextNode(' '));
	label.appendChild(emojiImage(replacements['A']));
	label.appendChild(emojiImage(replacements['B']));
	label.appendChild(emojiImage(replacements['C']));
	label.appendChild(emojiImage(replacements['d']));
	label.appendChild(emojiImage(replacements['e']));
	label.appendChild(emojiImage(replacements['f']));

	document.getElementById('sidebar').appendChild(label);
}

if (Object.hasOwnProperty.call(params, 'domain') && (!localData.domain || params.domain !== localData.domain)) {
	document.getElementById('emoji-domain').value = params.domain;
	loadEmoji(params.domain);
} else if (!localData.domain && document.referrer) {
	var domain = new URL(document.referrer).hostname;

	document.getElementById('emoji-domain').value = domain;
	loadEmoji(domain);
}
