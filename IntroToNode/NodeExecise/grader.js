function averages(scores)
{
    var total=0;
    for(var i=0 ; i<scores.length ; i++)
    {
        total+=scores[i];
    }
    var avg=total/scores.length;
    return Math.round(avg);
}

console.log("Average score is : ")
var scores=[90, 98, 89, 100, 100, 86, 94];
console.log(averages(scores));
