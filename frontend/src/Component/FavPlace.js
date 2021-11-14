import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function FavPlace() {

    const [favoriteList, setFavoriteList] = useState([])
    

    useEffect (async () => {
        const response = await axios.post("http://localhost:5000/favPlace")
        setFavoriteList(response.data)
    }, [favoriteList])

    return (
        <div>
            
            <div>
                <div></div>
                <div>
                    <div>
                        {
                            favoriteList.map((elem,index)=>{
                                return(
                                    <div>
                                        <img src={elem.imgUrl}/>
                                        <h4>{elem.header}</h4>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
