module.exports = async function (context, req) {
    context.log('2 JavaScript HTTP trigger function processed a request for URL ${req.url}".');

    const urlRegex = /^(https?:\/\/)?[a-zA-Z0-9.-]+\/arm\/api\/subscriptions\/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}\?api-version=2.0$/;
    if (req.method === 'PUT' && urlRegex.test(req.url)) {
        const requestBody = req.body;
        context.res = {
            status: 200,
            body: requestBody
        }
    } else {
        context.res = {
            status: 404,
            body: 'Not Found'
        }
    }
}