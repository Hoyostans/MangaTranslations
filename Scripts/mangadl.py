import urllib
import requests
bookno = 0
pageno = 10001
failno = 0
langver = input("EN or CN: ")
if langver.upper() == "EN":
    mangano = input("Manga ID here (https://manga.honkaiimpact3.com/book/id): ")
else:
    mangano = input("Manga ID here (https://comic.bh3.com/book/id): ")
while True:
    if langver.upper() == "EN":
        url = "https://d2tpbmzklky1cl.cloudfront.net/manga/static/comic/book/"+str(mangano)+"/"+str(bookno)+"/"+(str(pageno))[1:5]+".jpg"
    else:
        url = "https://act-webstatic.mihoyo.com/new_static_v2/comic/book/"+str(mangano)+"/"+str(bookno)+"/"+(str(pageno))[1:5]+".jpg"
    img_url = url
    print(img_url)
    try:
        urllib.request.urlretrieve(img_url, str(langver.upper())+str(mangano)+str(bookno)+str(pageno)[1:5]+".jpg")
        pageno = int(pageno)+1 
        failno = 0
        print("Success")
    except:
        bookno = bookno+1
        pageno = 10001
        failno = failno+1
    #print(failno)
    if failno == 5:
        break
print("Full Download Complete")
