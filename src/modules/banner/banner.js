const {
  section_banner,
  new_banner,
  update_banner,
  delete_banner,
} = require("./module");

module.exports = {
  GET: async (req, res) => {
    try {
      const { sectionId } = req.params;
      const sectionBanner = await section_banner(sectionId);
      res.status(200).json(sectionBanner);
    } catch (err) {
      res.status(404).json({ success: false, err: err.message });
    }
  },
  POST: async (req, res) => {
    try {
      console.log(req);
      const { bannerTitle, sectionId } = req.body;
      const newBanner = await new_banner(bannerTitle, sectionId);
      res.status(201).json({ success: true, newBanner: newBanner });
    } catch (err) {
      res.json({ success: false, err: err.message });
    }
  },
  PUT: async (req, res) => {
    try {
      const { bannerTitle, bannerId } = req.body;
      const updateBanner = await update_banner(bannerTitle, bannerId);
      res.status(201).json(updateBanner);
    } catch (err) {
      res.json({ success: false, err: err.message });
    }
  },
  DELETE: async (req, res) => {
    try {
      const { id } = req.params;
      await delete_banner(id);
      res.status(200).json({ message: "DELETED BANNER" });
    } catch (err) {
      res.json({ success: false, err: err.message });
    }
  },
};
