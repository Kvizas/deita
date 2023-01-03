import PremiumIcon from "../../images/Brain.png" 
import FreeIcon from "../../images/Book.png" 

import sassVars from "../../sass/abstracts/_variables.module.sass"

export const subscriptionConfig = {
    "all_features": [
        "Lorem ipsum dolor sit amet", 
        "Nostrud exercitation", 
        "Ex ea commodo consequat nisi ut aliquip", 
        "Officia deserunt mollit anim id est"
    ],
    "subs": [
        {
            "title": "Premium",
            "price": 4.99,
            "image": PremiumIcon,
            "color": "#C11574",
            "outline": true,
            "features": [
                "Lorem ipsum dolor sit amet", 
                "Nostrud exercitation", 
                "Ex ea commodo consequat nisi ut aliquip",
                "Officia deserunt mollit anim id est"
            ],
            "btnText": "Rinktis Premium"
        },
        {
            "title": "Nemokama",
            "price": 0,
            "image": FreeIcon,
            "color": sassVars.primaryColor,
            "outline": false,
            "features": [
                "Lorem ipsum dolor sit amet", 
                "Nostrud exercitation",
            ],
            "btnText": "Rinktis nemokamą"
        },
    ]
}