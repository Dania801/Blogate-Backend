import User from './user.model';

export async function signUp(req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
}

function upsertUser(profile, res) {
  return User.findOne({ twitterId: profile.id }, (err, user) => {
    if (!user) {
      const fullName = profile.displayName.split(' ');
      const newUser = new User({
        firstName: fullName[0],
        lastName: fullName[1],
        userName: profile.username,
        twitterId: profile.id,
      });
      newUser.save((error, savedUser) => {
        if (error) {
          return res.status(404);
        }
        return res.status(201).json(savedUser.toJSON());
      });
    } else {
      return res.status(201).json(user.toJSON());
    }
  });
}

export async function twitterSignup(req, res) {
  try {
    upsertUser(req.user, res);
  } catch (e) {
    return res.status(404).json(e);
  }
}

export function login(req, res, next) {
  res.status(200).json(req.user.toJSON());
  return next();
}

export async function update(req, res) {
  try {
    const user = await User.findById(req.user._id);
    Object.keys(req.body).forEach(key => {
      user[key] = req.body[key];
    });
    return res.status(201).json(await user.save());
  } catch (e) {
    return res.status(404).json(e);
  }
}
