import { Sequelize } from "sequelize";

const sequelize =  new Sequelize("postgresql://user_db:8W16kt7vCRgoThLg0WkgTyCuOMqaS9O2@dpg-cqufh35svqrc73bnov5g-a/veiculos_guca");
sequelize.sync();

export default sequelize;