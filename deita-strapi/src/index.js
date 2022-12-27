'use strict';

const { graphqlLoginPopulation } = require('./middlewares/graphql-login-population')

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {

    const extensionService = strapi.plugin('graphql').service('extension');

    extensionService.use(({ nexus }) => ({
      // types: [
      //   nexus.objectType({
      //     name: "UsersPermissionsMe",
      //     definition(t) {
      //       t.nonNull.id('id');
      //       t.nonNull.string('username');
      //       t.string('email');
      //       t.boolean('confirmed');
      //       t.boolean('blocked');
      //       t.field('role', { type: 'UsersPermissionsMeRole' });
      //       t.string('profilePic');
      //     },
      //   })
      // ],
      resolversConfig: {
        'Mutation.login': {
          middlewares: [graphqlLoginPopulation],
        },
      }
    }))

  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) { },
};
