'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('lotes',
      [
        {
          nome: 'JOSE DA SILVA',
          ativo: true,
          criado_em: new Date()
        },
        {
          nome: 'MARCOS ROBERTO',
          ativo: true,
          criado_em: new Date()
        },
        {
          nome: 'MARCIA CARVALHO',
          ativo: true,
          criado_em: new Date()
        }
      ], { timestamps: false });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('lotes', null, {});
  }
};
