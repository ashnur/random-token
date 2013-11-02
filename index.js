void function(root){
    module.exports = function(size){

        function r(max){ return Math.floor(Math.random()*max) }

        return isNaN(size) ? undefined :
               size < 1    ? undefined : function(){
            var key = ''
            var salt = 'abcdefghijklmnopqrstuvwxzy0123456789'
            var sl = salt.length
            while ( size -- ) {
                var rnd = r(sl)
                key += salt[rnd]
            }
            return key
        }()
    }
}(this)
