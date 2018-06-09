import HTTPStatus from 'http-status';
import Event from './event.model';

export async function createEvent(req, res) {
  try {
    const article = await Event.createEvent(req.body, req.user._id);
    return res.status(HTTPStatus.CREATED).json(article);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function updateEvent(req, res) {
  try {
    const event = await Event.findById(req.params.id);
    if (!event.user.equals(req.user.id)) {
      return res.sendStatus(HTTPStatus.UNAUTHORIZED);
    }
    Object.keys(req.body).forEach(key => {
      event[key] = req.body[key];
    });
    return res.status(HTTPStatus.OK).json(await event.save());
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function getEvent(req, res) {
  try {
    const event = await Event.findById(req.params.id).populate('user');
    return res.status(HTTPStatus.OK).json(event);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function getEventsList(req, res) {
  const skip = parseInt(req.query.skip, 0);
  const limit = parseInt(req.query.limit, 0);
  try {
    const events = await Event.eventsList({ skip, limit });
    return res.status(HTTPStatus.OK).json(events);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function deleteEvent(req, res) {
  try {
    const event = await Event.findById(req.params.id);
    if (!event.user.equals(req.user._id)) {
      return res.sendStatus(HTTPStatus.UNAUTHORIZED);
    }
    await event.remove();
    return res.sendStatus(HTTPStatus.OK);
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}
