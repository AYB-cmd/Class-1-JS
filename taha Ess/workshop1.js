// workshop 1
function compCat(cat1, cat2) {
    if (cat1.length > cat2.length) {
        console.log(`la paragraph ${cat1} est plus grand que ${cat2}`)
    } else if (cat1.length === cat2.length) {
        console.log(`la paragraph ${cat1} est egale  ${cat2}`)
    } else {
        console.log(`la paragraph ${cat1} est plus petite que ${cat2}`)
    }
}

compCat("tahtoh", "hothat");