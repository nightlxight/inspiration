const car = {
    type: "Fiat",
    model: "500",
    color: "white"
};

(async () => {
    try {
        console.log(caer.model);
    } catch (error) {
        console.log("there was an error")
        console.error(error);
    }
})();