'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('lotes_financeiro',
      [
        {
          nome_unidade: 17,
          id_lote: 3,
        },
        {
          nome_unidade: 18,
          id_lote: 6,
        },
        {
          nome_unidade: 19,
          id_lote: 7,
        }
      ], { timestamps: false });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('lotes_financeiro', null, {});
  }
};
