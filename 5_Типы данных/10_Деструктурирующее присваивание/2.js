function topSalary(salaries) {
    let max = 0, res = []
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > max) {
            max = salary
            res = []
        }
        if (salary == max) res.push(name)
    }
    return res
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries))