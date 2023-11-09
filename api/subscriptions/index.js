module.exports = async function (context, req) {
    context.log('2 JavaScript HTTP trigger function processed a request for URL ${req.url}".');

    const urlRegex = /^(https?:\/\/)?[a-zA-Z0-9.:\-]+\/arm\/api\/subscriptions\/[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}\?api-version=2.0$/;
    //                  https://gray-water-0de...net/arm/api/subscriptions/7d589e74-608d-4ec3-8fbf-168c6894a003?api-version=2.0                  
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