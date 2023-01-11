const data = require("../assets/generated.json");

exports.getData = async (req, res, next) => {
  try {
    res.status(200).json({
      message: "Success",
      data: data,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
      err.message = "Something went wrong !";
    }
  }
};
