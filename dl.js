console.log('dl.js uses the dl object loaded from https://deeplearnjs.org. Loading it now ...')

// load reference library:

var s = document.createElement('script')
s.src='https://unpkg.com/deeplearn'
s.onload=function(){
    console.log('... loaded from https://unpkg.com/deeplearn')
}
// s.src='deeplearn.min.js' // alternatively use local copy

document.head.appendChild(s)