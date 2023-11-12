const f = async ()=>{
    throw new Error('123')
}

try {

    f()
} catch(err) {
    err is Error
}

