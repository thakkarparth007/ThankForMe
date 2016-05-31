import random
import facebook

def thankWisely(postid):
    post = graph.get_object(id=postid)
    if 'comments' in post:
        return
    replies = ['Thank you!', 'Thanks!', 'Thanks a lot!']
    smileys = ['!', ':D', ':)', ':D :D']

    mycomment = random.choice(replies) + " " + random.choice(smileys)

    graph.put_comment(object_id=postid, message=mycomment)

access_token = raw_input("Enter your access-token here: ")
postIdsString = raw_input("Enter the comma-separated post ids here:\n")

graph = facebook.GraphAPI(access_token=access_token, version='2.0')
postIds = postIdsString.split(",")

for postid in postIds:
    thankWisely(postid)
