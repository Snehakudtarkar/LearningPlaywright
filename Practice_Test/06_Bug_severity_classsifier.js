/*
As a QA engineer, classify bugs based on two factors: frequency ("always", "often", "rarely") and impact ("blocker", "major", "minor"). Write a JavaScript program using nested if-else that prints the bug severity level. Classification Matrix: - always + blocker → P0 | always + major → P1 | always + minor → P2 - often + blocker → P1 | often + major → P2 | often + minor → P3 - rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4
*/

const frequency ="rarely";
const impact ="minor";

if (frequency==="always"){
    if(impact==="blocker"){
        result="severity level → P0";
    }else if(impact==="major"){
        result="severity level → P1";
    }else if(impact==="minor"){
        result="severity level → P2";
    }
} else if (frequency==="often"){
    if(impact==="blocker"){
        result="severity level → P1";
    }else if(impact==="major"){
        result="severity level → P2";
    }else if(impact==="minor"){
        result="severity level → P3";
    }
}else if (frequency==="rarely"){
    if(impact==="blocker"){
        result="severity level → P2";
    }else if(impact==="major"){
        result="severity level → P3";
    }else if(impact==="minor"){
        result="severity level → P4";
    }
}
console.log("frequency: " + frequency);
console.log("impact: " + impact);
console.log("result: " + result);