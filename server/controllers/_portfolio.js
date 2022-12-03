import Portfolio from "../models/portfolio.schema.js";

export const getPortfolio = async (req, res) => {
  try {
    const username = req.params.username;
    const portfolio = await Portfolio.findOne({ username });
    if (!portfolio)
      return res.status(204).json({ error: true, msg: "Portfolio not found" });
    if (!portfolio.status)
      return res.status(203).json({ error: true, msg: "Portfolio Offline" });
      
    portfolio.views++; //Incrementing the views
    await portfolio.save();
    res.status(200).json({ error: false, portfolio, msg: "Porfolio Found" });
  } catch (error) {
    res.status(500).json({ error: true, msg: "Internal server error" });
  }
};

export const getPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.status(200).json(portfolios);
  } catch (error) {}
};

export const createPortfolio = async (req, res) => {
  try {
    const { user_id, username, url, links, user_img } = req.body;
    const isPortfolio = await Portfolio.findOne({ user_id });
    if (isPortfolio) {
      return res
        .status(203)
        .json({ error: false, msg: "Portfolio already exists" });
    }
    const portfolio = new Portfolio({
      user_id,
      username,
      url,
      links,
      user_img,
    });
    await portfolio.save();
    res
      .status(201)
      .json({ error: false, msg: "Portfolio created successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: true, msg: "Internal server error" });
  }
};

export const updateLinksPortfolio = async (req, res) => {
  try {
    const { user_id, links } = req.body;
    const portfolio = await Portfolio.findOne({ user_id });
    if (!portfolio) {
      return res
        .status(203)
        .json({ error: false, msg: "Portfolio does not exists" });
    }
    portfolio.links = links;
    await portfolio.save();
    res.status(200).json({ error: false, msg: "Links updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: true, msg: "Internal server error" });
  }
};

export const updateNamePortfolio = async (req, res) => {
  try {
    //update the username of the portfolio
    const { username, user_id } = req.body;
    const portfolio = await Portfolio.findOne({ user_id });

    //check the portfolio is in the database
    if (!portfolio) {
      return res.status(203).json({ error: true, msg: "Portfolio not found" });
    }
    //check the username is same as the previous one
    if (portfolio.username === username) {
      return res.status(203).json({ error: true, msg: "Username is same" });
    }

    //check the username is already taken or not
    const isUsername = await Portfolio.findOne({ username });
    if (isUsername) {
      return res
        .status(203)
        .json({ error: true, msg: "Username already taken" });
    }

    //save the username
    portfolio.username = username;

    //save the url with new username
    const CLIENT_SIDE_URL = process.env.CLIENT_SIDE_URL;
    portfolio.url = `${CLIENT_SIDE_URL}/${username}`;
    await portfolio.save();
    console.log(portfolio);
    res.status(200).json({ error: false, msg: "Username updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: true, msg: "Internal server error" });
  }
};

export const updateCustomizationPortfolio = async (req, res) => {
  try {
    const { user_id, customizations } = req.body;
    const portfolio = await Portfolio.findOne({ user_id });
    if (!portfolio) {
      return res
        .status(203)
        .json({ error: false, msg: "Portfolio does not exists" });
    }
    portfolio.customizations = customizations;
    await portfolio.save();
    res
      .status(201)
      .json({ error: false, msg: "Portfolio updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, msg: "Internal server error" });
  }
};

export const deletePortfolio = async (req, res) => {
  try {
    const username = req.params.username;
    const portfolio = await Portfolio.findOne({ username });
    if (!portfolio)
      return res.status(404).json({ error: true, msg: "Portfolio not found" });
    await portfolio.delete();
    res
      .status(200)
      .json({ error: false, msg: "Portfolio deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: true, msg: "Internal server error" });
  }
};

export const updateOther = async (req, res) => {
  try {
    //update the status or newsletter or both of the portfolio using findOneAndUpdate
    const { user_id, data } = req.body;
    const portfolio = await Portfolio.findOneAndUpdate(
      { user_id },
      { $set: data },
      { new: true }
    );
    if (!portfolio) {
      return res.status(203).json({ error: true, msg: "Portfolio not found" });
    }
    res.status(200).json({ error: false, msg: "Portfolio updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: true, msg: "Internal server error" });
  }
};

export const deleteAllPortfolio = async (req, res) => {
  try {
    await Portfolio.deleteMany();
    res.status(200).json({ error: false, msg: "All portfolio deleted" });
  } catch (error) {
    res.status(500).json({ error: true, msg: "Internal server error" });
  }
};

export const searchPortfolio = async (req, res) => {
  try {
    const username = req.params.username;
    const portfolio = await Portfolio.find({ username: { $regex: username } });
    if (portfolio.length === 0) {
      return res.status(203).json({ error: true, msg: "Portfolio not found" });
    }
    res.status(200).json({ error: false, portfolio });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: true, msg: "Internal server error" });
  }
};
