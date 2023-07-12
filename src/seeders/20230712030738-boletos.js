'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('boletos',
      [
        {
          nome_sacado: 'JOSE DA SILVA',
          id_lote: 3,
          valor: 182.54,
          linha_digitavel: '123456123456123456',
          ativo: true,
          criado_em: new Date(),
        }
      ], { timestamps: false });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('boletos', null, {});

  }
};
