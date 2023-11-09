module.exports = async function (context, req) {
    context.log('3 JavaScript HTTP trigger function processed a request for URL.', req.url);

    context.res = {
        status: 404,
        body: 'Not Found'
    }
}