mycode = require('./../app.js')

describe('#letterGrader()', function () {
    it('converts a number into a letter grade', function () {
        expect(mycode.letterGrader(94)).toEqual('A');
        expect(mycode.letterGrader(84)).toEqual('B');
        expect(mycode.letterGrader(74)).toEqual('C');
        expect(mycode.letterGrader(64)).toEqual('D');
        expect(mycode.letterGrader(54)).toEqual('F');
    })
    it('test weather greater than 8 is + or 0 is a minus',function(){
        expect(mycode.letterGrader(98)).toEqual('A+');
        expect(mycode.letterGrader(101)).toEqual('A+');
        expect(mycode.letterGrader(90)).toEqual('A-');
        expect(mycode.letterGrader(80)).toEqual('B-');
        expect(mycode.letterGrader(88)).toEqual('B+');
        expect(mycode.letterGrader(68)).toEqual('D+');
    })
});
describe('#average()',function(){
    it('test if the average function is properly displaying the average',function(){
        expect(mycode.average([90, 95, 87, 60])).toEqual(83)

    })
})
describe('#median()',function(){
    it('the middle value. If there are an even number of scores, calculate the average of the middle two scores.', function(){
        expect(mycode.median([52,80,80,86,94])).toEqual(80);
        expect(mycode.median([52,80,80,86,94,95])).toEqual(83)
    })
})
describe('#mode()',function(){
    it('finds the value that appears most often from the array',function(){
        expect(mycode.mode([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual('92')
        expect(mycode.mode([82, 92, 75, 91, 92, 89, 95, 91, 91, 100, 86])).toEqual('91')
    })
    it('find a multi model if two numbers appear the same amount of time',function(){
        expect(mycode.mode([82, 92, 75, 91, 92, 89, 89, 95, 100, 86])).toEqual('89 92');
    })
})