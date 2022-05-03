const config = require("./explorer.json");

export default async (req, res) => {
  try {
    return res.status(200).json(config);
  } catch (error) {
    return res.status(400).json({
      error: `Oops, something went wrong...`,
    });
  }
};
