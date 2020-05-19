const Sequelize = require("sequelize");
const db = require("../db/index");

class Page extends Sequelize.Model {}
Page.init(
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    urlTitle: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM("open", "closed"),
    },
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    route: {
      type: Sequelize.VIRTUAL,
      // tirar get y devolver el text de la URL title /wiki/txt
      // return "/wiki" + this.urlTitle
      get() {
        return `/wiki/${this.urlTitle}`;
      },
    },
  },
  { sequelize: db, modelName: "page" }
);

console.log(Page.get());
module.exports = Page;
