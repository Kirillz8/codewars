function vaporcode(string) {
    return string.toUpperCase().split(" ").join("").split("").join("  ");
}

console.log(vaporcode('Kirill Akanin'));