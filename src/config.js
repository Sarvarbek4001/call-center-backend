const PORT = process.env.PORT || 5000;
const PG = {
  connectionString: "postgres://postgres:sarvarbek@localhost:5432/call_center",
};
const SECRET_KEY = "SECRET_KEY2277";
module.exports = {
  PORT,
  PG,
  SECRET_KEY,
};
