'use strict';

/**
 * knyga service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::knyga.knyga');
