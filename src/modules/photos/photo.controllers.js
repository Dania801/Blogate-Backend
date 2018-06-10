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
