const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async () => {
  const url =
    "https://re.jrc.ec.europa.eu/api/MRcalc?lat=45&lon=8&horirrad=1&outputformat=json&startyear=2010&endyear=2010";

  const data = await EleventyFetch(url, {
    duration: "1d",
    type: "json",
  });

  console.log(data);

  return data;
};
