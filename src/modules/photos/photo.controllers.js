import HTTPStatus from 'http-status';
import Photo from './photo.model';

export async function addPhoto(req, res) {
  try {
    const photoObject = { 'photo.data': req.file.path, 'photo.contentType': req.file.mimetype, caption: req.body.caption };
    const photo = await Photo.addPhoto(photoObject, req.user._id);
    return res.status(HTTPStatus.CREATED).json(photo);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}
