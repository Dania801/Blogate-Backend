// import User from '../users/user.model';
import Article from './article.model';

export async function createArticle(req, res) {
  try {
    const article = await Article.createArticle(req.body, req.user._id);
    return res.status(201).json(article);
  } catch (e) {
    return res.status(400).json(e);
  }
}
