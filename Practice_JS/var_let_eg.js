/*
1. var does NOT create a new variable for each loop iteration.
It creates one shared variable i.
2. Because var is function-scoped, only one variable i exists.
setTimeout callbacks run after the loop completes.
By then i becomes 3, so all callbacks print 3.*/

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0); // Logs 3, 3, 3 (shared)
}

/* let creates a new variable per loop iteration.
above issue is resoved with let keyword*/
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 0); // Logs 0, 1, 2 (block per iteration)
}