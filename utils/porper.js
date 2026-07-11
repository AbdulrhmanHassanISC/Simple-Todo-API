const proper = (err, req, res, next) => {

console.log(err);

res.status(500).json({ 
    status: "error",
    message: "Internal Server Error"
});

}

module.exports = proper;