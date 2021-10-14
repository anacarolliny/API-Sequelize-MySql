'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('usuario', {
      id:{ 
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false 
      },
      nome:{ 
        type:DataTypes.STRING,
        allowNull:false 
      },      
      senha:{ 
        type:DataTypes.STRING,
        allowNull:false 
      },
    }) //criando a tabela usuario
  
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
