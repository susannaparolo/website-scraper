from bs4 import BeautifulSoup
import requests
import re
product = input("What product do you want to search for? ")

url = f"https://groceries.morrisons.com/search?entry={product}"

# url = f"https://www.newegg.ca/p/pl?d={search_term}&N=4131"
# page = requests.get(url).text
# doc = BeautifulSoup(page, "html.parser")
# page_text = doc.find(class_="list-tool-pagination-text").strong
# pages = int(str(page_text).split("/")[-2].split(">")[-1][:-1])

result = requests.get(url).text
doc = BeautifulSoup(result, "html.parser")
div = doc.find(class_="fops fops-regular fops-shelf")
items = div.find_all(text=re.compile(product))

for item in items:
    print(item)
    print()
    
# for page in range(1, pages + 1):
#     url = f"https://www.newegg.ca/p/pl?d={search_term}&N=4131&page={page}"
#     page = requests.get(url).text
#     doc = BeautifulSoup(page, "html.parser")
    
#     div = doc.find(class_="item-cells-wrap border-cells items-grid-view four-cells expulsion-one-cell")
#     items = div.find_all(text=re.compile(search_term))
    
    
#     for item in items:
#         print(item)
