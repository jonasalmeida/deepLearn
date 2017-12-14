console.log('dl.js uses the dl object loaded from https://deeplearnjs.org. Loading it now ...')

// load reference library:

var s = document.createElement('script')
s.src='https://unpkg.com/deeplearn'
//s.src='deeplearn.min.js' // alternatively use local copy
s.onload=function(){
    console.log('... dl object loaded from '+s.src)
    dlfun()
}


document.head.appendChild(s)

dlfun=function(){ 
    // dl was loaded above
    dlfun.math= new dl.NDArrayMathGPU()
    dlfun.array=function(dt){
        if(!Array.isArray(dt)){
            return dl.Scalar.new(dt)
        }else{
            var dim =[dt.length]
            var x1 = dt
            if(!Array.isArray(x1[0])){
                return dl.Array1D.new(x1)
            }else{
                dim.push(x1[0].length)
                var x2 = []
                x1.forEach(function(xi){
                    x2 = x2.concat(xi)
                })
                if(!Array.isArray(x2[0])){
                    return dl.Array2D.new(dim,x2)
                }else{
                    dim.push(x2[0].length)
                    var x3 = []
                    x2.forEach(function(xi){
                        x3 = x3.concat(xi)
                    })
                    if(!Array.isArray(x3[0])){
                        return dl.Array3D.new(dim,x3)
                    }else{
                        dim.push(x2[0].length)
                        var x4 = []
                        x3.forEach(function(xi){
                            x4 = x4.concat(xi)
                        })
                        if(!Array.isArray(x4[0])){
                            return dl.Array4D.new(dim,x4)
                        }else{
                            error('this is not an array with fewer than 5 dimensions:', dt)
                        }
                    }

                }
            }

        }
    }
    dlfun.rand=function(n){
        n=n||10
        var y=[]
        for(var i=0;i<n;i++){
            y[i]=Math.random()
        }
        return y
    }
    dlfun.centropy=function(p){ // crossentropy
        return -p.map(function(pi){
            return pi*Math.log(pi)+(1-pi)*Math.log(1-pi)
            }).reduce(function(p1,p2){
                return p1+p2
            })/p.length    
    }
}

