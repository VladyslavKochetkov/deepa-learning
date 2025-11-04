const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    bmi: undefined,
    clcBMI: function(){
        let BMI = this.mass/(this.height * this.height);
        // thsi.bmi = BMI;
        return BMI;
    }, 
}; 
const John = { 
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    bmi: undefined,
    clcBMI: function(){
        let BMI = this.mass/(this.height * this.height);
        thsi.bmi = BMI;
        return BMI;
    },
};
    
if(john.clacBMI()> mark.clacBMI()) {
    console.log(`${john.fullName}'s BMI ${john.BMI} is higher than ${mark.fullName}'s BMI ${markrBMI}`);
}else{
    console.log(`${mark.fullName}'s BMI ${mark.BMI} is higher than ${john.fullName}'s BMI ${john.BMI}`);
}

/*
    D - Done
    V - Go on on top write the code - ok baby dont worry about what im typing for now, keep doing your thing
    You should how to indent code to make it easier to read. pretty much every time you write a { you should press
    enter and add a tab to indent the code. Soo
    
    vv everything is not indented here
    | const whatever;
    | console.log(whatever);
    | function x() { <-- now we put a { so now we should also on the next line add indent (using a single tab press)
    |   console.log(); <-- see how console word is more into (to the right) of the page 
    |   somethingElse(); <-- also indended, now we waant to close this function with a }, so we go to a new line and click shift tab, and put a }. shift tab removes a indent
    | } <-- now this is at the same indent as the original f of `function x()`

    do you get that? ugh yeah in those cases it is a bit complicated because you are writing function inside of an object,
    in that case you should just return it to the same indent as the key `clcBMI` but since you edit keeps track
    of your indentation it still following the same rule. { - new line - tab - whatever you want - new line - shift + tab - }

    want to watch me fix it up?
    D - sure
    V - ignoring the mess of comments, is that easier to read?
    D- yes
    V - ok what is your question about this
    D - after calcBMI why do we have to do let BMI = .. and this.bmi = BMI and return BMI at the end why not return calcBMI or /
    return just BMI why did we have to do this.bmi = BMI?
    V - I would not write this code like this. I think he was trying to teach you too much and trying to be clevar. 
    Oh ok so that is a valid question and this.bmi = BMI is valid. 

    So we are dealing with objects, and we need to store the calculation for future. So how can we store it so that we don't
    have to recalculate it later? 
    D - Yes calculate here and store it so that it is easier to reference later I get that

    this refers to mark and john object, so if we do in clcBMI of Mark console.log(this.fullName) what would it print? 
    D - console.log instaed of return?
    V - no let me just add the code - line 7, what would it print
    D - MarK
     Miller
    V - Yes, so this refers to the object, so say we change marks code a bit, i removed his this.bmi = BMI, what do 
    you think this changes
    D - does not specify whose BMI?
    V - No, not quite. It does not save the BMI for the future, so what happens later on on likes 24-28
    D - but we did the calculation to find BMI and returned BMI why would it not save that? 7 and 9
    V - where are we talking about? line 24?
    Oh so I see. So const BMI, that BMI variable is still destroyed once you return or reach }, but if you return you
    simply bring it out, you could assign it to sometihng, you could not. How is the returned value being used?
    D - not following
    V - So on line 7, you have const BMI = xyz. and then you have return. Once you hit the return (or the } if there was no)
    return, then the BMI variable gets destroyed, following standard rules. Not the return brings it up the onion. 
    So you have a chance to store it into another variable, or just use it. For example...
    const something = doSomeWork() - you are saving the result of doSomeWork into something, but the stuff inside of
    doSomeWork is still destroye
    console.log(doSomeWork()) - you used the result of doSomeWork, but you didn't save it anywhere, so it value is lost because
    you didn't save it, and everything inside of doSomeWork is destroyed.
    you could also just 
    doSomeWork() - in which case the value is also just lost. 
    does that make sense?
    D - what?
    V - lol
    where does that lose you? or just everywhere
    D - yes
    V - lets change the function name to something easier to understand. getHomeInformation
    lets say it returns some stuff about a home, owners, year built, etc, doesn't matter.
    following?
    D - yes
    V - Ok so lets say we want to save that information to use it later. we would do

    const larkDr = getHomeInformation("165 Lark Dr")

    and now I can use it later, but we don't know what happened in getHomeInformation, maybe it had 1 line, maybe 500, 
    maybe it has 1 variable, maybe 500. But either way ALL the stuff inside of it is destroyed and it returned to you
    some information.

    does that make sense? 
    D - sure
    V - ok so now in the example above we SAVED the result of getHomeInformation("165 Lark Dr") into a variable larkDr.
    but what if we did 
    console.log(getHomeInformation("165 Lark Dr")) we print the result, and we see it, BUT it is forgetting from the program
    how can we access it again? We can't. Make sense?
    D - sure
    V - so we "used" the value from the function, but we didn't store it. So since we didnt assign the result, and everything
    in the function is deleted, the value is essentailly gone, sometimes that is ok, sometimes that is not, depends if you
    need it in the future

    so in the above example back to line 8, we removed this.bmi = BMI; what did that do?
    D - let me look at it later babe, it is hurting my brain. I will come to it later. taking a break
*/