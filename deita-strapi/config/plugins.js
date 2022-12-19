module.exports = {
    ckeditor: true,
    'google-auth': false,
    graphql: {
        config: {
            endpoint: '/graphql',
            shadowCRUD: true,
            playgroundAlways: false,
            depthLimit: 7,
            amountLimit: 100,
            apolloServer: {
                tracing: false,
                introspection: true,
            },
        },
    },
    meilisearch: {
        config: {
            medziaga: {
                populateEntryRule: ['Disciplina.Ikona', 'Kategorija'],
            }
        }
    },
};