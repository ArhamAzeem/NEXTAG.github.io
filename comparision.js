var product = [{
    "id": 0,
    "title": "",
    "price": "",
    "description": "",
    "brand": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
  }, {
    "id": 1,
    "title": "Cream Plaid Wristlet",
    "price":"$70.00",
    "description": "A cream plaid wristlet typically refers to a small, compact purse or wallet that is designed to be worn around the wrist. The term 'cream'suggests that the wristlet isof a light beige or off-white color, and 'plaid' indicates a pattern characterized by intersecting lines forming squares or rectangles.",
    "brand": " Channel",
    "image": "./homepageimages/images/bags/bag3.png"
  }, {
    "id": 2,
    "title":"Blue Three-Fold Wallet",
    "price": "$59.00",
    "description": "Wallets with multiple folds often include different pockets and slots for various items. Commonly, one section is designated for cash, another for cards (credit cards, ID cards, etc.), and sometimes there's an additional section for miscellaneous items.",
    "brand": " Channel",
    "image": "./homepageimages/images/bags/BAGS6.png"
  }, {
    "id": 3,
    "title":"Sky Blue Three-Fold Wallet",
    "price": "$19.00",
    "description": "Combining 'sky blue' with a 'three-fold' design suggests that the wallet not only provides a visually appealing color but also offers a structured and organized way to store your belongings. The light and airy nature of sky blue can add a touch of freshness and elegance to the accessory. This type of wallet might be suitable for individuals who appreciate both a specific color preference and the practicality of a multi-compartmentalized wallet.",
    "brand": "Channel",
    "image": "./homepageimages/images/bags/bag4.png",
  },  {
    "id": 5,
    "title": "Three-Red Bags pack",
    "price":  "$2,399.00",
    "description": "Putting it together, a 'Three-Red Bags Pack' refers to a package or set that contains three bags, and each of these bags is red in color. This type of product description is straightforward, providing information about both the quantity and the color of the items included in the pack.",
    "image":"./homepageimages/images/bags/BAGS10.jpg",
    "brand": "Channel",
}]
  var product1 = [{
    "id": 0,
    "title": "",
    "price": "",
    "description": "",
    "brand": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
  }, {
    "id": 1,
    "title": "Zip Closure Handbag",
    "price":"$70.00",
    "description": "A 'Zip Closure Handbag' is a handbag that can be securely closed using a zipper. This type of closure is often preferred for its convenience and effectiveness in keeping items safe and organized within the bag.",
    "brand": " Dior",
    "image":  "./homepageimages/images/bags/bag1.png",
  }, {
    "id": 2,
    "title":"Stylish mini wallet for girls",
    "price":"$30.00",
    "description": "A 'Stylish Mini Wallet for Girls' is a small, fashionable wallet designed with a trendy look, and it's specifically targeted toward girls. It's likely to be a practical and stylish accessory for carrying essential items in a compact and convenient way.",
    "brand": "Dior",
    "image": "./homepageimages/images/bags/BAGS3.png",
  }, {
    "id": 3,
    "title": "Pink Mammon Handbag",
    "price":  "$40.00",
    "brand": " Dior",
    "description": "A 'Pink Mammon Handbag' is a handbag that is not only pink but may also incorporate design elements, styles, or branding associated with Mammon. ",
    "image": "./homepageimages/images/bags/bag2.png",
  },  {
    "id": 5,
    "title": "Stylish wallet forgirls ",
    "price":" $70.00", 
    "description": "A 'Stylish Mini Wallet for Girls' is a small, fashionable wallet designed with a trendy look, and it's specifically targeted toward girls. It's likely to be a practical and stylish accessory for carrying essential items in a compact and convenient way.",
    "brand": "Dior",
    "image": "./homepageimages/images/bags/BAGS5.png",}
]
  function item1(a) {
    if (a != select2) {
        document.getElementById("img1").src = product[a].image
        document.getElementById("price1").innerHTML = product[a].price
        document.getElementById("desc1").innerHTML = product[a].description
        document.getElementById("brand1").innerHTML = product[a].brand
    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("img1").src = product[0].image
        document.getElementById("price1").innerHTML = ""
        document.getElementById("desc1").innerHTML = ""
        document.getElementById("brand1").innerHTML = ""
    }
  }
  function item2(b) {
    if (b != select1) {
        document.getElementById("img2").src = product1[b].image
        document.getElementById("price2").innerHTML = product1[b].price
        document.getElementById("desc2").innerHTML = product1[b].description
        document.getElementById("brand2").innerHTML = product1[b].brand
    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("img2").src = product1[0].image
        document.getElementById("price2").innerHTML = ""
        document.getElementById("desc2").innerHTML = ''
        document.getElementById("brand2").innerHTML = ""
    }
  }