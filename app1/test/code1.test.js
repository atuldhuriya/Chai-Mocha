import { expect } from "chai";
import {add} from '../code1.js';
// import { describe } from "mocha";
import {Testcases} from '../testcases.js';


Testcases.forEach(function(testcase,index){
    let status = testcase.status == "passed" ? `\x1B[32m${testcase.status}\x1B[0m`:
    `\x1B[33m${testcase.status}\x1B[0m`;

 describe(`${testcase.title} : ${index+1} ${status}`,function(){
    it(`${testcase.title} : ${index+1}`,function(){
        let actualValue = add(testcase.args[0],testcase.args[1]);
        let expectedValue = testcase.result;
        expect(actualValue).to.equal(expectedValue);
     });
  });
});


// import {expect} from 'chai';
// import {add} from '../code1.js';
// import {describe} from 'mocha';

// describe('code1 Test',function(){
//     it('Test Case 1',function(){
//         let actualValue = add (10,2);
//         let expectedValue = 13;
//         expect(actualValue).to.equal(expectedValue);
//     })
// })