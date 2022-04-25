'''
Use the flask shell within your photo-app directory
to run these queries. When you get them the way you want, 
incorporate them into your views!
'''
from models import db, Post, User, Comment, Following
from sqlalchemy import func

engine = db.engine
session = db.session

# retrieve the users that user #12 is following
query = session.query(Following.following_id).filter(Following.user_id == 12)
user_ids = [rec.following_id for rec in query]
user_ids.append(12)

# filter the Post table for only the posts owned by one of
# the users in the user_ids list:
posts = Post.query.filter(Post.user_id.in_(user_ids)).all()
