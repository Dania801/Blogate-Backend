import HTTPStatus from 'http-status';
import Event from './event.model';

export async function createEvent(req, res) {
  try {
    const article = await Event.createEvent(req.body, req.params._id);
    return res.status(HTTPStatus.CREATED).json(article);
  } catch (e) {
    return res.status(400).json(e);
  }
}
