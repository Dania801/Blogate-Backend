import HTTPStatus from 'http-status';
import Photo from './photo.model';

export async function addPhoto(req, res) {
  try {
    const photoObject = {
      'photo.data': req.file.path,
      'photo.contentType': req.file.mimetype,
      caption: req.body.caption };

    const photo = await Photo.addPhoto(photoObject, req.user._id);
    return res.status(HTTPStatus.CREATED).json(photo);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function getPhotoById(req, res) {
  try {
    const photo = await Photo.findById(req.params.id).populate('user');
    return res.status(HTTPStatus.OK).json(photo);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function getPhotosList(req, res) {
  const limit = parseInt(req.query.limit, 0);
  const skip = parseInt(req.query.skip, 0);
  try {
    const photos = await Photo.photosList({ limit, skip });
    return res.status(HTTPStatus.OK).json(photos);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function updatePhoto(req, res) {
  try {
    const photo = await Photo.findById(req.params.id);
    if (!photo.user.equals(req.user._id)) {
      return res.sendStatus(HTTPStatus.UNAUTHORIZED);
    }
    Object.keys(req.body).forEach(key => {
      photo[key] = req.body[key];
    });
    if (req.file) {
      photo.photo.contentType = req.file.mimetype;
      photo.photo.data = req.file.path;
    }
    return res.status(HTTPStatus.OK).json(await photo.save());
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function deletePhoto(req, res) {
  try {
    const photo = await Photo.findById(req.params.id);
    if (!photo.user.equals(req.user._id)) {
      return res.sendStatus(HTTPStatus.UNAUTHORIZED);
    }
    await photo.remove();
    return res.sendStatus(HTTPStatus.OK);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}
