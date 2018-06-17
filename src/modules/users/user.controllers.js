import HTTPStatus from 'http-status';
import User from './user.model';

export async function signUp(req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(HTTPStatus.CREATED).json(user);
  } catch (err) {
    return res.status(HTTPStatus.BAD_REQUEST).json(err);
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
          return res.status(HTTPStatus.BAD_REQUEST);
        }
        return res.status(HTTPStatus.CREATED).json(savedUser.toJsonAuth());
      });
    } else {
      return res.status(HTTPStatus.OK).json(user.toJsonAuth());
    }
  });
}

export async function twitterSignup(req, res) {
  try {
    upsertUser(req.user, res);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export function login(req, res, next) {
  res.status(HTTPStatus.OK).json(req.user.toJsonAuth());
  return next();
}

export async function update(req, res) {
  try {
    const user = await User.findById(req.user._id);
    Object.keys(req.body).forEach(key => {
      user[key] = req.body[key];
    });
    if (req.file) {
      user.photo.contentType = req.file.mimetype;
      user.photo.data = req.file.path;
    }
    return res.status(HTTPStatus.OK).json(await user.save());
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}
