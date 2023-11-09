module.exports = async function (context, req) {
    context.log('1 JavaScript HTTP trigger function processed a request for URL "${req.url}".');

    context.res = {
        status: 200,
        body: req.body
    }
}