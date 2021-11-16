import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';

export default function Card() {
    const p = useParams()
    console.log(p);
    const [cardOne, setCardOne] = useState({})
    const [comments, setComments] = useState([])
    const [nameInput, setNameInput] = useState("")
    const [commentInput, setCommentInput] = useState("")

    useEffect(async () => {
        const response = await axios.get(`http://localhost:5000/`);
        setCardOne(response.data[0]);
      }, []);

      const saveNameInput=(e)=>{
        setNameInput(e.target.value)
      }

      const saveCommentInput=(e)=>{
          setCommentInput(e.target.value)
      }

      const addCommentButton= async()=>{
        //   const copied = [...comments]
        //   copied.push({name:nameInput, comment:commentInput})
        //   setComments(copied)
        const response = await axios.post("http://localhost:5000/new-comment-card1",{
            name: nameInput,
            comment: commentInput,
        })
        const resCard = await axios.get("http://localhost:5000/comments-card");
        setComments(resCard.data)
        console.log(resCard.data)
      }

    return (
        <div>
            <div>
                <img src={cardOne.imgUrl} />
                <h3>{cardOne.header}</h3>
                <span>
                    ♥
                </span>
                <div>
                    <h3>Add comment:</h3>
                    <label>Enter name:</label> <input onChange={(e)=>{saveNameInput(e)}} type="text" />
                     <br /> <br />
                    <textarea onChange={(e)=>{saveCommentInput(e)}} cols="70" rows="7"></textarea>
                    <button onClick={()=>{addCommentButton()}}>Add</button>
                    <div>
                        {
                            comments? comments.map((elem,index)=>{
                                return(
                                    <div>
                                        <h4>{elem.name}</h4>
                                        <p>{elem.comment}</p>
                                    </div>
                                )
                                
                            })
                            :
                            <div>""</div>
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}
