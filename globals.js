/**
 *  ------------------
 *    Global Objects
 *  ------------------
 * 
 *    __dirname()
 *    __filename()
 *    clearTimeout(timeoutObject)
 *    console()
 *    exports()
 *    global()
 *    module()
 *    Process()
 *    require()
 *    setTimeout(callback, delay[, ...args])
 *    TextDecoder()
 *    TextEncoder()
 *    URL()
 * 
 * */
const __dirname = import.meta.dirname;
console.log(__dirname)


setTimeout(()=>{
    console.log("This is a console log!!")
},1000)
