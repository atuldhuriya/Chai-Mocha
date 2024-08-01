import { expect } from "chai";
import { fGreatest } from "../code2.js";
import { describe, it } from "mocha";
import { findGreatestTests } from "../greatestcases.js";

describe("fGreatest Function Tests", function() {
    findGreatestTests.forEach(function(testCase, index) {
        let status = testCase.status == "passed" ? `\x1B[32m${testCase.status}\x1B[0m` : `\x1B[31m${testCase.status}\x1B[0m`;
        
        it(`${testCase.title} : ${index+1} ${status}`, function() {
            let args = testCase.args;
            let actualValue = fGreatest(args[0], args[1], args[2]);
            let expectedValue = testCase.result;
            expect(actualValue).to.equal(expectedValue);
        });
    });
});
