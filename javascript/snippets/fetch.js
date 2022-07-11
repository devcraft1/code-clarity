
async function x() {
    const response = await fetch('https://github.com/');
    const body = await response.text();
    console.log(body)
}

console.log(x())
