'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('boletos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome_sacado: { type: Sequelize.STRING },
      id_lote: { type: Sequelize.INTEGER },
      valor: { type: Sequelize.DECIMAL },
      linha_digitavel: { type: Sequelize.STRING },
      ativo: { type: Sequelize.BOOLEAN },
      criado_em: { type: Sequelize.DATE },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('boletos');
  }
};
