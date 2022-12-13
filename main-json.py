from bs4 import BeautifulSoup
import requests
import re

# product = input("What item are you looking for? ")
# url = f"https://www.clarks.co.uk/search/?text={product}"

url = "https://www.clarks.co.uk/Womens/Sale/c/ukw81?q=:price-asc&sort=price-asc"
result = requests.get(url).text
doc = BeautifulSoup(result, "html.parser")

data = doc.find_all("h3")
print(data)


# div = doc.find(class_="product-thumbnail__product-name content-shimmer")
# items = div.find_all(text=re.compile(product))

# for item in items:
#     print(item)

# # details = {}

# # for tr in trs[:10]:
# #     name, price = tr.contents[2:4]
# #     fixed_name = name.p.string
# #     fixed_price = price.a.string

# #     details[fixed_name] = fixed_price

# print(doc)
