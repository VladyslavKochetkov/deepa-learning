const calcAverage = (a,b,c) => {
    const average = (a + b + c) / 3;

    return average;
    // return (a+b+c)/3;
    /*
        V - Ok so we have this piece of code here, and this piece of code needs to run multiple times,
        because we need to calculate the average more than once, right?
        D - yes so it is global function basically?
        V - Yes pretty much, so this function has a task, calculate the average of 3 numbers. After it calculates it we need
        to store that value somewhere, right? And not only store it, we need to store it somewhere we can use it. 
        This code above calculates the average, but does it do anything with it?
        D - No it just stores it
        V - Where does it store it?
        D - it stores in the variable name average
        V - Yes, but can that variable used anywhere? Remember, if we have a block (a pair of {} that is not an object)
        everytime we reach the end paired } everything inside of their goes 💥, and gets deleted right?
        D - Yes I understand that but Average is used in another places but it is not called average they have different 
        name then that
        V - Where is it used in another place? there?
        D - no it is used to calculate the scoreDolphins and koalas
        V - Ok, but with the return commented out, average is not used anywhere. Becauseline 2 runs, line 3 is skipped because
        it is a comment, and then we have our chat comment, and then it is the matched end }, so const average on line 2 is
        lost.
        D - I see
        V - So now look. Everything in programming is like an onion. You have to peel peal peel? whatever, the layer in order 
        to get the value. So below we have 

        let scoreDolphins = calcAverage(44,23,71);

        if we have something simple like 

        let name = "Deepa"

        that is a pur value, there is no layer to it, but with 

        let scoreDolphins = calcAverage(44,23,71);

        we have an onion layer. We cannot assign scoreDolphins a value because first we must find out what
        calcAverage(44,23,71); resolves to. We need to find out what it resolves, so we have to go and look at it.

        The value that functions resolve to, is the value that was returned. If there is no return statement, then
        a function resolves to `undefined`.

        So right now, calcAverage does not have a return (I commented it)... so it resolves to undefined. So right now
        the code is equal to 

        let scoreDolphins = undefined

        because calcAverage(44,23,71) returned (by default) undefined. confusing?
        D - no making sense
        V - so we return a value whenever we need to bring a value back. So right now if we add `return average;`
        (i added it to line 3 above) the code will run and it will return whatever ((44 + 23 + 71) / 3) is 
        so now the code is pretty much equal to 

        let scoreDolphins = (44 + 23 + 71) / 3

        which itself is equal to 

        let scoreDolphins = 46

        but it has to peel the onion to get that
        D - I get it now but now let's look at this 

        hold on
    
    */
}

// let scoreDolphins = calcAverage(44,23,71);
// let scoreKoalas = calcAverage(65,54,49);

// const checkWinner = function(avgDolphins, avgKoalas){
//     if(avgDolphins>avgKoalas){
//         console.log(`dolphins win by ${avgDolphins} vs ${avgKoalas}`);
//     } else {
//         console.log(`Koalas win by ${avgKoalas} vs ${avgDolphins}`)
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas)

// I understand the code but now if I have to write it I do not know where return goes and why?