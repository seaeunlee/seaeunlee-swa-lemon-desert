module.exports = async function (context, req) {
    context.log('3 JavaScript HTTP trigger function processed a request for URL.', req.url);

    if (req.method === 'PUT') {
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