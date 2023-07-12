'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lotes_financeiro', {
      nome_unidade: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      id_lote: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lotes_financeiro');
  }
};
