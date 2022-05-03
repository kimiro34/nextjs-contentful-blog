export default async (req, res) => {
  try {
    return res.status(200).json({ error: null });
  } catch (error) {
    return res.status(400).json({
      error: `Oops, something went wrong...`,
    });
  }
};
