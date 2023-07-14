// code your solution here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(mondayActivity= 'go to the office'){
    return `This Monday, I will ${mondayActivity}.`
}


function wrapAdjective(arg="*"){
    const innerFunction = function(adjective="special"){
        return `You are ${arg}${adjective}${arg}!`
    }
    return innerFunction;
}
wrapAdjective("*")