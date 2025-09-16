function solve(array, startPie, endPie) {

    let startIndex = array.indexOf(startPie);
    let endIndex = array.indexOf(endPie);
    
    return array.slice(startIndex, endIndex + 1);
}
solve(['Pumpkin Pie',
 'Key Lime Pie',
 'Cherry Pie',
 'Lemon Meringue Pie',
 'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie')