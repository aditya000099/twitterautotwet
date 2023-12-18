import tweepy

from dotenv import load_dotenv
import os

load_dotenv()

consumer_key= os.getenv("CONSUMER_KEY")
consumer_secret= os.getenv("CONSUMER_SECRET")
access_token_key= os.getenv("ACCESS_TOKEN_KEY")
access_token_secret= os.getenv("ACCESS_TOKEN_SECRET")
bearer_token= os.getenv("BEARER_TOKEN")

client = tweepy.Client(bearer_token, consumer_key, consumer_secret, access_token_key, access_token_secret)

auth = tweepy.OAuth1UserHandler(consumer_key, consumer_secret, access_token_key, access_token_secret)

api = tweepy.API(auth)

client.create_tweet(text="Bot testing")