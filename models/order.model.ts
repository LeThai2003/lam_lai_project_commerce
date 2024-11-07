import { DataTypes } from "sequelize";
import sequelize from "../configs/database";


const Order = sequelize.define("Order", {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "carts",
            key: "cart_id",
        }
    },
    order_desc: {
      type: DataTypes.STRING(300),
    },
    order_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    order_fee: {
        type: DataTypes.INTEGER,
    },
    order_status: {
        type: DataTypes.INTEGER,
        references: {
            model: "orderstatus",
            key: "id"
        }
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Đặt giá trị mặc định là false
    },
    address: {
      type: DataTypes.INTEGER,
      references:{
        model: "address",
        key: "address_id" 
      }
    },
    phone: {
      type: DataTypes.STRING(15)
    },
 },{
    tableName: 'orders',
    timestamps: true, // Tự động quản lý createdAt và updatedAt
  });


export default Order;