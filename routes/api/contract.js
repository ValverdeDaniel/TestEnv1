const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
// const validateProfileInput = require('../../validation/contract');
// const validateExperienceInput = require('../../validation/experience');
// const validateEducationInput = require('../../validation/education');

// Load Profile Model
// const Profile = require('../../models/Profile');
// Load User Model
const User = require('../../models/User');

//Load Contract Model
const Contract = require("../../models/Contract")

// @route   GET api/contracts/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'contract Works' }));

// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      let contracts = await Contract.find({ user: req.user.id })
      .populate('user', ['name', 'avatar'])
      res.send(contracts)
    } catch (error) {
      res.status(500).send(error)
    }
  }
);

// @route   GET api/profile/all
// @desc    Get all profiles
// @access  Public
router.get('/all', (req, res) => {
  const errors = {};

  Contract.find()
    .populate('user', ['name', 'avatar'])
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = 'There are no profiles';
        return res.status(404).json(errors);
      }

      res.json(profiles);
    })
    .catch(err => res.status(404).json({ profile: 'There are no profiles' }));
});

// @route   GET api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public

router.get('/handle/:handle', (req, res) => {
  const errors = {};

  Contract.findOne({ handle: req.params.handle })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public

router.get('/user/:user_id', (req, res) => {
  const errors = {};

  Contract.findOne({ user: req.params.user_id })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err =>
      res.status(404).json({ profile: 'There is no profile for this user' })
    );
});

// REST API
// POST = creating a new contract
// GET '/' = Getting list of feeds
// GET '/:id' = Getting a single contract
// DELETE '/:id' = Deleting a single contract
// PUT '/:id' = Updating a single contract

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const contractFields = {...req.body};
      contractFields.user = req.user.id;
      if (contractFields.skills) {
        contractFields.skills = contractFields.skills.split(',');
      }
      let contract = await new Contract(contractFields).save();
      res.json(contract);
    } catch (error) {
      console.error(error);
      res.status(500).send(error)
    }

  }
);

router.get('/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  const errors = {};

  Contract.findOne({ contract: req.contract.id })
  .then(contract => {
    if(!contract) {
      errors.nocontract = 'there is no contract for this user';
      return res.status(404).json(errors);
    }
    res.json(contract);
  })
  .catch(err => res.status(404).json(err))
});

//attempt2 of getting contract info
router.get(
  '/1/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.contract.id,
      name: req.contract.user,
      email: req.contract.platform
    });
  }
);

// @route   POST api/profile/experience
// @desc    Add experience to profile
// @access  Private
// router.post(
//   '/experience',
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     const { errors, isValid } = validateExperienceInput(req.body);

//     // Check Validation
//     if (!isValid) {
//       // Return any errors with 400 status
//       return res.status(400).json(errors);
//     }

//     Profile.findOne({ user: req.user.id }).then(profile => {
//       const newExp = {
//         title: req.body.title,
//         company: req.body.company,
//         location: req.body.location,
//         from: req.body.from,
//         to: req.body.to,
//         current: req.body.current,
//         description: req.body.description
//       };

//       // Add to exp array
//       profile.experience.unshift(newExp);

//       profile.save().then(profile => res.json(profile));
//     });
//   }
// );

// // @route   POST api/profile/education
// // @desc    Add education to profile
// // @access  Private
// router.post(
//   '/education',
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     const { errors, isValid } = validateEducationInput(req.body);

//     // Check Validation
//     if (!isValid) {
//       // Return any errors with 400 status
//       return res.status(400).json(errors);
//     }

//     Profile.findOne({ user: req.user.id }).then(profile => {
//       const newEdu = {
//         school: req.body.school,
//         degree: req.body.degree,
//         fieldofstudy: req.body.fieldofstudy,
//         from: req.body.from,
//         to: req.body.to,
//         current: req.body.current,
//         description: req.body.description
//       };

//       // Add to exp array
//       profile.education.unshift(newEdu);

//       profile.save().then(profile => res.json(profile));
//     });
//   }
// );

// @route   DELETE api/profile/experience/:exp_id
// @desc    Delete experience from profile
// @access  Private
// router.delete(
//   '/experience/:exp_id',
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     Profile.findOne({ user: req.user.id })
//       .then(profile => {
//         // Get remove index
//         const removeIndex = profile.experience
//           .map(item => item.id)
//           .indexOf(req.params.exp_id);

//         // Splice out of array
//         profile.experience.splice(removeIndex, 1);

//         // Save
//         profile.save().then(profile => res.json(profile));
//       })
//       .catch(err => res.status(404).json(err));
//   }
// );

// // @route   DELETE api/profile/education/:edu_id
// // @desc    Delete education from profile
// // @access  Private
// router.delete(
//   '/education/:edu_id',
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     Profile.findOne({ user: req.user.id })
//       .then(profile => {
//         // Get remove index
//         const removeIndex = profile.education
//           .map(item => item.id)
//           .indexOf(req.params.edu_id);

//         // Splice out of array
//         profile.education.splice(removeIndex, 1);

//         // Save
//         profile.save().then(profile => res.json(profile));
//       })
//       .catch(err => res.status(404).json(err));
//   }
// );

// // @route   DELETE api/profile
// // @desc    Delete user and profile
// // @access  Private
// router.delete(
//   '/',
//   passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     Profile.findOneAndRemove({ user: req.user.id }).then(() => {
//       User.findOneAndRemove({ _id: req.user.id }).then(() =>
//         res.json({ success: true })
//       );
//     });
//   }
// );

module.exports = router;
