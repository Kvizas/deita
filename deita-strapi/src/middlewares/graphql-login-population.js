const { toPlainObject } = require('lodash/fp');

const { checkBadRequest } = require('@strapi/plugin-users-permissions/server/graphql/utils');

const graphqlLoginPopulation = async (resolve, parent, args, context) => {
    const { koaContext } = context;

    koaContext.params = { provider: args.input.provider };
    koaContext.request.body = toPlainObject(args.input);

    await strapi.plugin('users-permissions').controller('auth').callback(koaContext);

    const output = koaContext.body;

    checkBadRequest(output);

    if (output.user) {
        const userWithRole = await strapi.db
            .query("plugin::users-permissions.user")
            .findOne({
                where: {
                    id: output.user.id,
                },
                populate: true
            });

        return {
            user: userWithRole,
            jwt: output.jwt,
        };

    }

    return {
        user: output,
        jwt: output.jwt,
    };
}

module.exports = {
    graphqlLoginPopulation,
};