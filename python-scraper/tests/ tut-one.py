# from bs4 import BeautifulSoup
# 
# # Open the html as read
# with open('index.html', 'r') as f:
#     doc = BeautifulSoup(f, "html.parser")
#    
# # Print all html doc
# print(doc.prettify())
# 
# # Print the element as a string
# tag = doc.title
# print(tag.string)
# 
# # Print all p tags
# tag = doc.find_all("p")
# print(tag)
# 
# # Access nested tags
# tags = doc.find_all("p")[0]
# print(tags.find_all("b"))

"""
Access Website
"""
from bs4 import BeautifulSoup
import requests

url = "https://www.newegg.ca/gigabyte-geforce-rtx-3080-ti-gv-n308tgaming-oc-12gd/p/N82E16814932436?Description=3080&cm_re=3080-_-14-932-436-_-Product"
url1 = "https://groceries.morrisons.com/browse"
  
result = requests.get(url1)
doc = BeautifulSoup(result.text, "html.parser")

print(doc.prettify())
# prices = doc.find_all(text="$")
# parent = prices[0].parent
# strong = parent.find("strong")
# print(strong.string)