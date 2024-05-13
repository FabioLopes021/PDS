const db = require("../config/mysql");
const utils = require("../utils/index");

exports.getAds = async (req, res) => {
    try {
      const ad = await db.ad.findAll();
  
      if (artists.length === 0) return res.status(404).send({ success: 0, message: "Não existem anúncios" });
  
      let response = {
        success: 1,
        length: ad.length,
        results: ad.map((ad) => {
          return {
            id: ad.adid,
            userid: ad.useruid,
            pieceid: ad.pieceid,
            description: ad.description
          };
        }),
      };
  
      return res.status(200).send(response);
    } catch (err) {
      return res.status(500).send({ error: err, message: err.message });
    }
  };