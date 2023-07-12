const BoletosModel = (sequelize, DataTypes) => {
    const Boleto = sequelize.define('Boleto',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nome_sacado: DataTypes.STRING,
            id_lote: DataTypes.INTEGER,
            valor: DataTypes.DECIMAL,
            linha_digitavel: DataTypes.STRING,
            ativo: DataTypes.BOOLEAN,
            criado_em: DataTypes.DATE,
        }, { timestamps: false, tableName: 'boletos' });
    Boleto.associate = function (models) {
        Boleto.belongsTo(models.Lote, { foreignKey: 'id_lote', as: 'lote' })
    };
    return Boleto;
};

module.exports = BoletosModel;