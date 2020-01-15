module.exports = function parseStringAsArray(param) {
    return param.split(',').map((tech)=>{
        return tech.trim();
    });
}