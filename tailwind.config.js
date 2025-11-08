const { heroui } = require("@heroui/react");


module.exports = {
content: [
"./app/**/*.{js,jsx}",
"./components/**/*.{js,jsx}",
"./node_modules/@heroui/theme/dist/**/*.{js,jsx}"
],
theme: { extend: {} },
plugins: [heroui()] // İstemiyorsan bu satırı ve content'teki node_modules satırını çıkar
};