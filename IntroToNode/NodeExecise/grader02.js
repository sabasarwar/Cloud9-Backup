function averages(scores)
{
    var total=0;
    scores.forEach(function(element){
        total+=element;
    });
    var avg=total/scores.length;
    return Math.round(avg);
}

console.log("Average score is : ")
var scores=[90, 98, 89, 100, 100, 86, 94];
console.log(averages(scores));
 