const LotesModel = (sequelize, DataTypes) => {
    const Lote = sequelize.define('Lote',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nome: DataTypes.STRING,
            ativo: DataTypes.BOOLEAN,
            criado_em: DataTypes.DATE,
        }, { timestamps: false, tableName: 'lotes', underscored: true });
    return Lote;
};

module.exports = LotesModel;