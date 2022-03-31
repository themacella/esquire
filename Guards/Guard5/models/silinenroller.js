const mongoose = require("mongoose");

const deletedRolesData = mongoose.Schema({
  roleid: String,
  rolename: String,
  Tarih: Number
});

module.exports = mongoose.model("deletedRoles", deletedRolesData);