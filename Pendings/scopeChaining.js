var a = 10 ;

function outerFunction(){
    let  b = 20 ;

    function middle(){
        let c = 30

        function inner(){
            console.log(a)
            console.log(b)
            console.log(c)
        }
        inner()
    }
    middle()
}

outerFunction()