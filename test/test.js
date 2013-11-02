void function(){
    var test = require('tape')
    var rt = require('../index.js')
    test('type', function(t){
        t.plan(1)
        t.equal(typeof rt(1), 'string')
    })

    test('length', function(t){
        var i = 4
        t.plan(i+2)
        while ( i -- ) {
            var l = Math.pow(i,i)
            t.equal(rt(l).length, l)
        }
        t.equal(rt(-1), undefined)
        t.equal(rt([]), undefined)
    })

    var ndups = 10
    var klen = 4
    var count = 5000
    test('number of duplicates less than '+ndups+' from '+count+' keys of length '+klen, function(t){
        t.plan(1)
        var i = count
        var keys = []
        var duplicates = []
        var k = ''

        function same(k,c){ return k == c }

        while ( i -- ) {
            k = rt(klen)
            if ( keys.some(same.bind(null,k)) ) duplicates.push(k)
            keys.push(k)
        }

        console.log('# actual number of duplicates', duplicates.length)
        t.equal(duplicates.length , duplicates.length < ndups ? duplicates.length : -1)
    })

}()
