const BoletosModel = (sequelize, DataTypes) => {
    const Boleto = sequelize.define('Boleto',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nomeSacado: DataTypes.STRING,
            idLote: DataTypes.BOOLEAN,
            valor: DataTypes.DECIMAL,
            linhaDigitavel: DataTypes.STRING,
            ativo: DataTypes.BOOLEAN,
            criado_em: DataTypes.DATE,
        }, { timestamps: false, tableName: 'boletos', underscored: true });
    Boleto.associate = function (models) {
        Boleto.belongsTo(models.Lote, { foreignKey: 'idLote', as: 'lote' })
    };
    return Boleto;
};

module.exports = BoletosModel;