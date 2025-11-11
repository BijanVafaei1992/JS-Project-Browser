class IndexController {
    constructor() {
        // Initialize any properties if needed
    }

    handleGetRequest(req, res) {
        res.send('GET request handled');
    }

    handlePostRequest(req, res) {
        res.send('POST request handled');
    }

    // Add more methods as needed for other routes
}

export default IndexController;