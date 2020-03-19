// workshop 2
const reverse = (open) => {

    if (!open) {
        return open;
    } else {
        return open.split("").reverse().join("");
    }
}
var s = reverse("tahtoh");
console.log(s);