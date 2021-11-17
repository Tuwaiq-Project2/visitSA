import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams,useHistory } from "react-router";
import ImageUploading from 'react-images-uploading';
import "./Card.css"


export default function Card() {
    // const history = useHistory()
  const {id} = useParams();
  const [cardOne, setCardOne] = useState({});
  const [comments, setComments] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [commentInput, setCommentInput] = useState("");


  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };



  useEffect(async () => {
    const response = await axios.get(`http://localhost:5000/ccard/${id}`);
    setCardOne(response.data);
    setComments(response.data.comments)
    console.log(response.data);
  }, []);

  const saveNameInput = (e) => {
    setNameInput(e.target.value);
  };

  const saveCommentInput = (e) => {
    setCommentInput(e.target.value);
  };

  const addCommentButton = async () => {
    //   const copied = [...comments]
    //   copied.push({name:nameInput, comment:commentInput})
    //   setComments(copied)
    const response = await axios.post(
      `http://localhost:5000/new-comment-cards${id}`,
      {
        name: nameInput,
        comment: commentInput,
      }
    );
    // const resCard = await axios.get("http://localhost:5000/comments-card");
    setComments(response.data);
    // console.log(resCard.data);
  };

  return (
    <div>
        {/* <button onClick={()=>{
            history.goBack()
        }}> go back</button>      */}
         <div className="container-card-page">
          {/* {  console.log(useParams())} */}
          {/* <img src={cardOne.imgUrl} alt="" /> */}
        <img src={cardOne.imgUrl} />
        <h2>{cardOne.header}</h2>
        <span>♥</span>
        <hr />
        <div>
          {/* <h4>Add comment:</h4> */}
          <h4>Share with us your moments:</h4>
          <label>Enter name:</label>{" "}
          <input
            onChange={(e) => {
              saveNameInput(e);
            }}
            type="text"
          />
          <br /> <br />
          {/* <br /> <br /> */}
          <textarea
            onChange={(e) => {
              saveCommentInput(e);
            }}
            cols="70"
            rows="7"
          ></textarea>

<div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          // onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>

          <button
            onClick={() => {
              addCommentButton();
            }}
          >
            Add
          </button>
          <div>
            {comments ? (
              comments.map((elem, index) => {
                return (
                  <div>
                    <h4>{elem.name}</h4>
                    <p>{elem.comment}</p>
                  </div>
                );
              })
            ) : (
              <div>""</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
