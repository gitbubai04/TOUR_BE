const Tour = require('../models/tourModels');

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: 'bad requst! Please try again'
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 200,
    success: true,
    message: null,
    data: {}
  });
};

exports.createTour = (req, res) => {};

exports.getTourById = (req, res) => {};

exports.updateTour = (req, res) => {};

exports.deleteTour = (req, res) => {};
