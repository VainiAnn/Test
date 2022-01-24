const express = require('express');
const app = express();

/**
 * Add two numbers together
 * @param {Number} a first param
 * @param {Number} b second param
 * @returns {Number} sum of a and b
 */
const add = (a,b) => 
{
    return a+b;
}



app.get ('',(req, res) => 
{
    const sum = add(1,2);
    console.log(sum);
    res.send ('ok')
});

app.listen (3000, () => 
{
console.log ('Server listening on localhost: 3000');
});