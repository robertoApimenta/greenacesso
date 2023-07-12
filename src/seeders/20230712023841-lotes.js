'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('lotes',
      [
        {
          id: 3,
          nome: 'JOSE DA SILVA',
          ativo: true,
          criado_em: new Date()
        },
        {
          id: 6,
          nome: 'MARCOS ROBERTO',
          ativo: true,
          criado_em: new Date()
        },
        {
          id: 7,
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
