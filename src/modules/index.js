import userRoutes from './users/user.routes';
import articleRoutes from './articles/article.routes';
import eventRoutes from './events/event.routes';
import photoRoutes from './photos/photo.routes';

export default app => {
  app.use('/api/v1/users', userRoutes);
  app.use('/api/v1/articles', articleRoutes);
  app.use('/api/v1/events', eventRoutes);
  app.use('/api/v1/photos', photoRoutes);
};
