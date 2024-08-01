import { expect } from "chai";

import { findOdd } from "../index.js";
import { describe } from "mocha";

let actaulsResults = findOdd(1,100);
actaulsResults.forEach((element,index)=>{
    describe(`Test Case ${index+1}`,function(){
        it(`check if ${element} is Odd:`, function(){
            expect(element % 2).to.equal(1);
        });
    });
})