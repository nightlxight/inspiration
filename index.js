const car = {
    type: "BMW",
    model: "500",
    color: "black"
};

(async () => {
    try {
        console.log(caer.model);
    } catch (error) {
        console.log("there was an error")
        console.error(error);
    }
})();