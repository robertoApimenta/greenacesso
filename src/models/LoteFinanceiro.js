const LotesFinanceiroModel = (sequelize, DataTypes) => {
    const LotesFinanceiro = sequelize.define('LotesFinanceiro',
        {
            nomeUnidade: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            idLote: DataTypes.INTEGER,
        }, { timestamps: false, tableName: 'lotes_financeiro', underscored: true });
    LotesFinanceiro.associate = function (models) {
        LotesFinanceiro.belongsTo(models.Lote, { foreignKey: 'idLote', as: 'lote' })
    };
    return LotesFinanceiro;
};

module.exports = LotesFinanceiroModel;