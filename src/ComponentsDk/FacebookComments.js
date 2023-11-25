import React, { useState } from 'react';
import './FacebookComments.css';
import Avatar1 from '../img/avatars/1.jpg';
import Avatar2 from '../img/avatars/2.jpg';
import Avatar3 from '../img/avatars/3.jpg';
import Avatar4 from '../img/avatars/4.png';
import Avatar5 from '../img/avatars/5.jpg';
import Avatar6 from '../img/avatars/6.jpg';
import Avatar7 from '../img/avatars/7.jpg';
import Avatar8 from '../img/avatars/8.png';
import Avatar9 from '../img/avatars/9.png';

function FacebookComments() {
  const initialCommentDetails = [
    {
      name: 'Emilie Vangede',
      content: "Jeg har brugt Novalight Masken i et par uger nu, og forskellen for min hud er fantastisk. Jeg er helt tilfreds med resultaterne!",
      time: '26m', // Update the time as needed
      avatar: Avatar1, // Update the avatar as needed
      count: '12', // Update the count as needed
    },
    {
      name: 'Sofia Vejen',
      content: "Jeg var i starten skeptisk over for LED masker, men Novalight har fuldstændig fået mig til at skifte mening. Min hud føles forynget og ser så meget klarere ud.",
      time: '26m', // Update the time as needed
      avatar: Avatar2, // Update the avatar as needed
      count: '7', // Update the count as needed
    },
    {
      name: 'Laura O. Madsen',
      content: "Novalight masken har helt ændret min hudpleje rutine. Den er nem at bruge, og resultaterne er virkelig til at lægge mærke til.",
      time: '26m', // Update the time as needed
      avatar: Avatar3, // Update the avatar as needed
      count: '2', // Update the count as needed
    },
    {
      name: 'Mette Abildgaard',
      content: "Efter at have prøvet et par forskellige masker før, adskiller Novalight sig markant. LED teknologien fungerer virkelig godt på min hud.",
      time: '26m', // Update the time as needed
      avatar: Avatar4, // Update the avatar as needed
      count: '27', // Update the count as needed
    },
    {
      name: 'Isabella Franck Jensen',
      content: "Jeg har altid haft problemer med huden, men siden jeg har brugt Novalight, har jeg opdaget store forbedringer.",
      time: '10:32', // Update the time as needed
      avatar: Avatar5, // Update the avatar as needed
      count: '4', // Update the count as needed
    },
    {
      name: 'Anne M. Ingemann',
      content: "Jeg har lige modtaget min Novalight Maske. Er der nogen som kan anbefale hvilken frekvens der er bedst? Glæder mig til at starte.",
      time: '9:22', // Update the time as needed
      avatar: Avatar6, // Update the avatar as needed
      count: '9', // Update the count as needed
    },
    {
      name: 'Lilian Taagaard',
      content: "Jeg har brugt Novalight masken tre gange om ugen, og har set en mærkbar reducering af mine hudproblemer. Helt sikkert pengene værd.",
      time: '8:12', // Update the time as needed
      avatar: Avatar7, // Update the avatar as needed
      count: '1', // Update the count as needed
    },
    {
      name: 'Josefine Ludvigsen',
      content: "Det jeg elsker ved Novalight Masken, er at den ikke kun behandler ansigtet, men også nakken. En fantastisk tilføjelse til min hudpleje rutine.",
      time: '4:59', // Update the time as needed
      avatar: Avatar8, // Update the avatar as needed
      count: '24', // Update the count as needed
    },
    {
      name: 'Grete Jensen',
      content: "Er der nogen, der har nogle tips til at maksimere fordelene ved Novalight Mask? Jeg vil meget gerne have et råd.",
      time: '', // Update the time as needed
      avatar: Avatar9, // Update the avatar as needed
      count: '1', // Update the count as needed
    },
  ];
  

  const commentsPerPage = 4;
  const [visibleComments, setVisibleComments] = useState(commentsPerPage);
  const visibleCommentDetails = initialCommentDetails.slice(0, visibleComments);
  const remainingComments = initialCommentDetails.length - visibleComments;

  const handleLoadMoreComments = () => {
    setVisibleComments((prevVisibleComments) => Math.min(prevVisibleComments + commentsPerPage, initialCommentDetails.length));
  };

  return (
    <div style={{ textAlign: 'left' }}>
      <div className="container">
        <div className="col-md-12" id="fbcomment">
          <div className="header_comment">
            <div className="row">
              <div className="col-md-6 text-left">
                <span className="count_comment">264,235 Kommentarer</span>
              </div>
            </div>
          </div>
  
          <div className="body_comment">
            <div className="row">
              <ul id="list_comment" className="col-md-12">
                {visibleCommentDetails.map((comment, index) => (
                  <li key={index} className="box_result row" style={{listStyle: 'none'}}>
                    <div className="avatar_comment col-md-1">
                      <img src={comment.avatar} alt="avatar" />
                    </div>
                    <div className="result_comment col-md-11">
                      <h4>{comment.name}</h4>
                      <p>{comment.content}</p>
                      {comment.time && (
                        <div className="tools_comment">
                          <a className="like" href="/">Synes godt om</a>
                          <span aria-hidden="true"> · </span>
                          <a className="replay" href="/">Svar</a>
                          <span aria-hidden="true"> · </span>
                          <i className="fa fa-thumbs-o-up"></i> <span className="count">{comment.count}</span>
                          <span aria-hidden="true"> · </span>
                          <span>{comment.time}</span>
                        </div>
                      )}
                      <ul className="child_replay"></ul>
                    </div>
                  </li>
                ))}
              </ul>
  
              {remainingComments > 0 && (
                <button className="show_more" type="button" onClick={handleLoadMoreComments}>
                  Se mere
                </button>
              )}
  
              {remainingComments <= 0 && (
                <button className="show_less" type="button" style={{ display: 'none' }}>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Indlæser...
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  

export default FacebookComments;
