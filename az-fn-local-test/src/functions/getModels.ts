import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function getModels(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'models';

    return { body: `Hello, ${name}!` };
};

app.http('getModels', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: getModels
});
